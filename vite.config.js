import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';

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
  plugins: [
    eslintPlugin({
      failOnError: false
    }),
    stylelintPlugin({
      failOnError: false
    })
  ]
};
