import VitePluginBrowserSync from 'vite-plugin-browser-sync'

export default {
  plugins: [
    VitePluginBrowserSync({
      buildWatch: {
        enable: true,
        codeSync: true,
        bs: {
          proxy: 'http://localhost/spaceman/',
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
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
};
