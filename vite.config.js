import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import { optimize } from 'svgo';
import sharp from 'sharp';

function optimizeAssets() {
  return {
    async generateBundle() {
      const basePath = directory => path.resolve(__dirname, directory);

      const paths = {
        img: {
          source: basePath('resources/img'),
          dist: basePath('dist/img'),
        },
        svg: {
          source: basePath('resources/svg'),
          dist: basePath('dist/svg'),
        },
      };

      if (!fs.existsSync(paths.img.dist)) {
        fs.mkdirSync(paths.img.dist, {
          recursive: true
        });
      }

      if (!fs.existsSync(paths.svg.dist)) {
        fs.mkdirSync(paths.svg.dist, {
          recursive: true
        });
      }

      for (const file of fs.readdirSync(paths.img.source)) {
        const inputPath = path.join(paths.img.source, file);
        const outputPath = path.join(paths.img.dist, file);
        const image = sharp(inputPath);

        const format = await image.metadata().format;
        if (['jpeg', 'jpg', 'png', 'webp'].includes(format)) {
          await image[format]({ quality: 80 }).toFile(outputPath);
        }

        if (format === 'gif') {
          fs.copyFileSync(inputPath, outputPath);
        }
      }

      // Optimize SVGs
      for (const file of fs.readdirSync(paths.svg.source)) {
        const svgPath = path.join(paths.svg.source, file);
        const svgContent = fs.readFileSync(svgPath, 'utf8');

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
        });

        fs.writeFileSync(path.join(paths.svg.dist, file), result.data)
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
      name: 'spaceman',
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
