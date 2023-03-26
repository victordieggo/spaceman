/*
=======================================================
GULPFILE
=======================================================
1. Require Plugins
2. Set Assets Paths
3. Build Styles
4. Build Scripts
5. Optimize Images
6. Optimize SVGs
7. Start Server
8. Reload Browser
9. Watch Files
10. Build Task
11. Default Task
=======================================================
*/

'use strict';

/*
-------------------------------------------------------
1. Require Plugins
-------------------------------------------------------
*/

// General
const {gulp, src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync');
const path = require('path');
const del = require('del');

// Scripts
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

// Styles
const stylelint = require('gulp-stylelint');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

// Images/SVGs
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

/*
-------------------------------------------------------
2. Set Assets Paths
-------------------------------------------------------
*/

const basePath = {
  dist: 'assets/dist/',
  src: 'assets/src/'
};

const assets = {
  css: {
    src: basePath.src + 'sass/**/*.scss',
    dist: basePath.dist + 'css'
  },
  js: {
    src: basePath.src + 'js/**/*.js',
    dist: basePath.dist + 'js'
  },
  img: {
    src: basePath.src + 'img/*.{png,gif,jpg,webp}',
    dist: basePath.dist + 'img'
  },
  svg: {
    src: basePath.src + 'svg/*.svg',
    dist: basePath.dist + 'svg'
  }
};

const bsReload = [
  './**/*.{html,php}',
  assets.svg.src
];

/*
-------------------------------------------------------
3. Build Styles
-------------------------------------------------------
*/

const buildStyles = (done) => {
  del.sync(assets.css.dist);
  return src(assets.css.src, {sourcemaps: true})
    .pipe(stylelint({
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(dest(assets.css.dist))
    .pipe(dest(assets.css.dist, {sourcemaps: '.'}))
    .pipe(browserSync.stream());
  done();
};

/*
-------------------------------------------------------
4. Build Scripts
-------------------------------------------------------
*/

const buildScripts = (done) => {
  del.sync(assets.js.dist);
  return src(assets.js.src)
    .pipe(
      webpackStream(webpackConfig)
      .on('error', function(error) {
        console.log(error.message);
        this.emit('end');
      })
    )
    .pipe(dest(assets.js.dist))
    .pipe(browserSync.stream());
  done();
};

/*
-------------------------------------------------------
5. Optimize Images
-------------------------------------------------------
*/

const optimizeIMG = (done) => {
  del.sync(assets.img.dist);
  return src(assets.img.src)
    .pipe(imagemin([
      mozjpeg({quality: 89}),
      pngquant({quality: [0.7, 0.8]})
    ]))
    .pipe(dest(assets.img.dist))
    .pipe(browserSync.stream());
  done();
};

/*
-------------------------------------------------------
6. Optimize SVGs
-------------------------------------------------------
*/

const optimizeSVG = (done) => {
  del.sync(assets.svg.dist);
  return src(assets.svg.src)
    .pipe(imagemin())
    .pipe(dest(assets.svg.dist));
  done();
};

/*
-------------------------------------------------------
7. Start Server
-------------------------------------------------------
*/

const startServer = (done) => {
  browserSync.init({
    proxy: 'localhost/' + path.basename(__dirname),
    open: false,
  });
  done();
};

/*
-------------------------------------------------------
8. Reload Browser
-------------------------------------------------------
*/

const reloadBrowser = (done) => {
  browserSync.reload();
  done();
};

/*
-------------------------------------------------------
9. Watch Files
-------------------------------------------------------
*/

const watchFiles = () => {
  watch(assets.js.src, buildScripts);
  watch(assets.css.src, buildStyles);
  watch(assets.img.src, optimizeIMG);
  watch(assets.svg.src, optimizeSVG);
  watch(bsReload, reloadBrowser);
};

/*
-------------------------------------------------------
10. Build Task
-------------------------------------------------------
*/

const buildApp = series(
  buildScripts,
  buildStyles,
  optimizeIMG,
  optimizeSVG
);

exports.build = buildApp;

/*
-------------------------------------------------------
11. Default Task
-------------------------------------------------------
*/

exports.default = series(buildApp, startServer, watchFiles);
