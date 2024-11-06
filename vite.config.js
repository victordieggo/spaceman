export default {
  root: 'resources',
  base: './',
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
