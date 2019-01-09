/*
=======================================================
GULPFILE
=======================================================
1. Require Plugins
2. Set Assets Path
3. Lint/Build CSS
4. Lint/Build JS
5. Compress Images
6. Compress SVG files
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

// Scripts
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Styles
const stylelint = require('gulp-stylelint');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const groupMq = require('gulp-group-css-media-queries');

// Images/SVGs
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

/*
-------------------------------------------------------
2. Set Assets Path
-------------------------------------------------------
*/

const basePath = {
  dist: 'assets/dist/',
  src: 'assets/src/'
};

const assets = {
  css: {
    dist: basePath.dist + 'css',
    src:  basePath.src  + 'sass/**/*.scss'
  },
  js: {
    dist: basePath.dist + 'js',
    src:  basePath.src  + 'js/*.js',
    vndr: basePath.src  + 'js/vendor/*.js'
  },
  img: {
    dist: basePath.dist + 'img',
    src:  basePath.src  + 'img/*.{png,gif,jpg}'
  },
  svg: {
    dist: basePath.dist + 'svg',
    src:  basePath.src  + 'svg/*.svg'
  }
};

const bsReload = [
  './**/*.{html,php}',
  assets.svg.src
];

/*
-------------------------------------------------------
3. Lint/Build CSS
-------------------------------------------------------
*/

const buildStyles = (done) => {
  return src(assets.css.src)
    .pipe(stylelint({
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(groupMq())
    .pipe(csso())
    .pipe(dest(assets.css.dist))
    .pipe(browserSync.stream());
  done();
};

/*
-------------------------------------------------------
4. Lint/Build JS
-------------------------------------------------------
*/

const buildScripts = (done) => {
  return src([assets.js.vndr, assets.js.src])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['env'],
      ignore: assets.js.vndr
    }))
    .on('error', (e) => console.log(e))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(assets.js.dist))
    .pipe(browserSync.stream());
  done();
};

/*
-------------------------------------------------------
5. Compress Images
-------------------------------------------------------
*/

const optimizeIMG = (done) => {
  return src(assets.img.src)
    .pipe(imagemin([
      mozjpeg({quality: 89}),
      pngquant({quality: 70})
    ]))
    .pipe(dest(assets.img.dist))
    .pipe(browserSync.stream());
  done();
};

/*
-------------------------------------------------------
6. Compress SVG files
-------------------------------------------------------
*/

const optimizeSVG = (done) => {
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
  watch([assets.js.vndr, assets.js.src], buildScripts);
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

const build = parallel(
  buildScripts,
  buildStyles,
  optimizeIMG,
  optimizeSVG
);

exports.build = build;

/*
-------------------------------------------------------
11. Default Task
-------------------------------------------------------
*/

exports.default = parallel(build, startServer, watchFiles);
