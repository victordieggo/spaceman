import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import { optimize } from 'svgo'
import sharp from 'sharp'

function optimizeAssets() {
  return {
    name: 'optimize-assets',
    async generateBundle() {
      const imgDir = path.resolve(__dirname, 'resources/img')
      const svgDir = path.resolve(__dirname, 'resources/svg')
      const distImgDir = path.resolve(__dirname, 'dist/img')
      const distSvgDir = path.resolve(__dirname, 'dist/svg')

      if (!fs.existsSync(distImgDir)) {
        fs.mkdirSync(distImgDir, { recursive: true })
      }
      if (!fs.existsSync(distSvgDir)) {
        fs.mkdirSync(distSvgDir, { recursive: true })
      }

      // Optimize images
      const imageFiles = fs.readdirSync(imgDir)
      for (const file of imageFiles) {
        const inputPath = path.join(imgDir, file)
        const outputPath = path.join(distImgDir, file)
        const image = sharp(inputPath)
        const metadata = await image.metadata()

        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
          await image.jpeg({ quality: 80 }).toFile(outputPath)
        } else if (metadata.format === 'png') {
          await image.png({ quality: 80 }).toFile(outputPath)
        } else if (metadata.format === 'webp') {
          await image.webp({ quality: 80 }).toFile(outputPath)
        } else if (metadata.format === 'gif') {
          // Sharp doesn't optimize GIFs, so we'll just copy them
          fs.copyFileSync(inputPath, outputPath)
        }
      }

      // Optimize SVGs
      const svgFiles = fs.readdirSync(svgDir)
      for (const file of svgFiles) {
        const svgPath = path.join(svgDir, file)
        const svgContent = fs.readFileSync(svgPath, 'utf8')
        const result = optimize(svgContent, {
          path: svgPath,
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  removeEmptyAttrs: false,
                },
              },
            },
          ],
        })
        fs.writeFileSync(path.join(distSvgDir, file), result.data)
      }
    }
  }
}

export default defineConfig({
  plugins: [
    VitePluginBrowserSync({
      buildWatch: {
        enable: true,
        codeSync: true,
        bs: {
          proxy: `localhost/${path.basename(__dirname)}`,
          files: ['./**/*.{html,php,scss,js}'],
          notify: true,
        }
      }
    }),
    optimizeAssets(),
  ],
  build: {
    lib: {
      entry: 'resources/scripts/main.js',
      name: 'mcf',
    },
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: 'resources/scripts/main.js',
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
  },
});
