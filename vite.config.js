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
          files: ['./**/*.{html,php,scss,js}'],
          notify: true,
          open: false,
          watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir']
        }
      }
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: true }
        ]
      },
      webp: { quality: 75 }
    }),
    {
      name: 'watch-images-and-svgs',
      async buildStart() {
        this.addWatchFile('resources/img');
        this.addWatchFile('resources/svg');
      },
    },
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
        assetFileNames: ({ name }) => {
          if (name.endsWith('.svg')) {
            return `svg/[name].[ext]`;
          } else if (/\.(png|jpe?g|gif|webp)$/.test(name)) {
            return `img/[name].[ext]`;
          }
          return `[name].[ext]`;
        }
      }
    },
    cssCodeSplit: false,
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
