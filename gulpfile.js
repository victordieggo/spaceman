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
7. Watch/Build/Default
=======================================================
*/

'use strict';

/*
-------------------------------------------------------
1. Require Plugins
-------------------------------------------------------
*/

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const stylelint = require('gulp-stylelint');
const groupMq = require('gulp-group-css-media-queries');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const path = require('path');

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
    src:  basePath.src  + 'css/**/*.scss'
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

gulp.task('css', () => {
  gulp.src(assets.css.src)
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
    .pipe(gulp.dest(assets.css.dist))
    .pipe(browserSync.stream());
});

/*
-------------------------------------------------------
4. Lint/Build JS
-------------------------------------------------------
*/

gulp.task('js', () => {
  gulp.src([assets.js.vndr, assets.js.src])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['env'],
      ignore: assets.js.vndr
    }))
    .on('error', (e) => console.log(e))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(assets.js.dist))
    .pipe(browserSync.stream());
});

/*
-------------------------------------------------------
5. Compress Images
-------------------------------------------------------
*/

gulp.task('img', () => {
  gulp.src(assets.img.src)
    .pipe(imagemin([
      mozjpeg({quality: 89}),
      pngquant({quality: 70})
    ], {verbose: true}))
    .pipe(gulp.dest(assets.img.dist))
    .pipe(browserSync.stream());
});

/*
-------------------------------------------------------
6. Compress SVG files
-------------------------------------------------------
*/

gulp.task('svg', () => {
  gulp.src(assets.svg.src)
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest(assets.svg.dist));
});

/*
-------------------------------------------------------
7. Watch/Build/Default
-------------------------------------------------------
*/

gulp.task('watch', () => {
  browserSync.init({
    proxy: 'localhost/' + path.basename(__dirname),
    open: false,
  });
  gulp.watch([assets.js.vndr, assets.js.src], ['js']);
  gulp.watch(assets.css.src, ['css']);
  gulp.watch(assets.img.src, ['img']);
  gulp.watch(assets.svg.src, ['svg']);
  gulp.watch(bsReload, browserSync.reload);
});

gulp.task('build', ['js', 'css', 'img', 'svg']);

gulp.task('default', ['build', 'watch']);
