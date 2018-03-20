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
const combineMq = require('gulp-combine-mq');
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
    glob: basePath.src  + 'css/**/*.scss',
    src:  basePath.src  + 'css/main.scss'
  },
  js: {
    dist: basePath.dist + 'js',
    glob: basePath.src  + 'js/**/*.js',
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

gulp.task('css-lint', () => {
  gulp.src(basePath.src + 'css/!(vendor)**/*.scss')
    .pipe(stylelint({
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }))
});

gulp.task('css-build', () => {
  gulp.src(assets.css.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(combineMq())
    .pipe(csso())
    .pipe(gulp.dest(assets.css.dist))
    .pipe(browserSync.stream());
});

gulp.task('css', ['css-lint', 'css-build']);

/*
-------------------------------------------------------
4. Lint/Build JS
-------------------------------------------------------
*/

gulp.task('js-lint', () => {
  gulp.src(assets.js.src)
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('js-build', () => {
  gulp.src([assets.js.vndr, assets.js.src])
    .pipe(babel({
      ignore: [assets.js.vndr],
      presets: ['env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(assets.js.dist))
    .pipe(browserSync.stream());
});

gulp.task('js', ['js-lint', 'js-build']);

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
  gulp.watch(assets.js.glob, ['js']);
  gulp.watch(assets.css.glob, ['css']);
  gulp.watch(assets.img.src, ['img']);
  gulp.watch(assets.svg.src, ['svg']);
  gulp.watch(bsReload, browserSync.reload);
});

gulp.task('build', ['js', 'css', 'img', 'svg']);

gulp.task('default', ['build', 'watch']);
