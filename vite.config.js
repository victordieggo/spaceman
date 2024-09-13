import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import path from 'path'

export default {
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
    })
  ],
  publicDir: false,
  build: {
    lib: {
      entry: 'resources/scripts/main.js',
      name: 'mcf',
    },
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
    css: {
      sourcemap: true
    }
  },
};
