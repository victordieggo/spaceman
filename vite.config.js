export default {
  root: 'resources',
  base: './',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
};
