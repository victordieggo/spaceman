const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './assets/src/js/main.js',
    styles: './assets/src/sass/main.scss'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'assets/dist'),
    clean: true,
    publicPath: '/assets/dist/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            if (pathData.filename.includes('svg')) {
              return 'svg/[name][ext]';
            }
            return 'img/[name][ext]';
          }
        }
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'assets/src'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // new StylelintPlugin({
    //   configFile: path.resolve(__dirname, '.stylelintrc'),
    //   context: path.resolve(__dirname, 'assets/src/sass'),
    //   files: '**/*.scss',
    //   configBasedir: __dirname,
    // }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost/' + path.basename(__dirname),
      files: ['./**/*.php', './**/*.html'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/src/img',
          to: 'img',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/.gitkeep'],
          },
        },
        {
          from: 'assets/src/svg',
          to: 'svg',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/.gitkeep'],
          },
        },
      ],
    }),
  ],
};
