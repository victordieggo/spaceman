export default {
  root: 'resources',
  base: './',
  build: {
    outDir: '../dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
};
