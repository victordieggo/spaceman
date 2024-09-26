import path from 'path';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import viteImagemin from 'vite-plugin-imagemin';
import { defineConfig } from 'vite';
import { promises as fs } from 'fs';

export default defineConfig({
  plugins: [
    VitePluginBrowserSync({
      buildWatch: {
        enable: true,
        codeSync: true,
        bs: {
          proxy: `localhost/${path.basename(__dirname)}`,
          files: ['./**/*.{html,php,scss,js}', './resources/img/**/*.{png,jpg,jpeg,gif,webp}', './resources/svg/**/*.svg'],
          notify: true,
          open: false,
        }
      }
    }),
    // Image optimization with vite-plugin-imagemin
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false }, // Ensure viewBox is not removed
          { name: 'cleanupIDs', active: true }
        ]
      },
      webp: { quality: 75 }
    }),
    // Custom plugin to ensure images and SVGs are copied and included in the build
    {
      name: 'copy-images-and-svgs',
      async buildStart() {
        // Read and process image files
        const imgFiles = await fs.readdir('resources/img');
        for (const file of imgFiles) {
          this.emitFile({
            type: 'asset',
            name: file,
            fileName: `img/${file}`,
            source: await fs.readFile(`resources/img/${file}`)
          });
        }

        // Read and process SVG files
        const svgFiles = await fs.readdir('resources/svg');
        for (const file of svgFiles) {
          this.emitFile({
            type: 'asset',
            name: file,
            fileName: `svg/${file}`,
            source: await fs.readFile(`resources/svg/${file}`)
          });
        }
      }
    }
  ],
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: 'resources/scripts/main.js',
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        // Ensure optimized assets are output to the correct directories
        assetFileNames: ({ name }) => {
          if (name.endsWith('.svg')) {
            return `svg/[name].[ext]`;  // Output optimized SVG files to dist/svg
          } else if (/\.(png|jpe?g|gif|webp)$/.test(name)) {
            return `img/[name].[ext]`;  // Output optimized image files to dist/img
          }
          return `[name].[ext]`;
        }
      }
    },
    cssCodeSplit: false, // Combine CSS into a single file
    css: {
      devSourcemap: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources')
    }
  }
});
