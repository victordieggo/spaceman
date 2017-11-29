'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const stylelint = require('gulp-stylelint');
const combineMq = require('gulp-combine-mq');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const path = require('path');
const task = process.argv[2];
const args = process.argv[3];

const basePath = {
  src:'assets/src/',
  dist: 'assets/dist/'
};

const srcPath = {
  js: basePath.src + 'js/**/*.js',
  css: basePath.src + 'css/**/*.scss',
  scss: basePath.src + 'css/main.scss',
  img: basePath.src + 'img/*.{png,gif,jpg}',
  svg: basePath.src + 'svg/*.svg'
};

const distPath = {
  js:  basePath.dist + 'js',
  css: basePath.dist + 'css',
  img: basePath.dist + 'img',
  svg: basePath.dist + 'svg'
};

const bsReload = [
  './**/*.{html,php}',
  srcPath.svg
];

const returnTasks = function () {
  const regex = /[^a-zA-Z]+/g;
  if (args) {
    return task + args.replace(regex, '');
  }
  return lint, build;
};

gulp.task('css', function () {
  const lint = gulp.src(srcPath.css)
  .pipe(stylelint({
    failAfterError: false,
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
  const build = gulp.src(srcPath.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(combineMq())
    .pipe(cssmin())
    .pipe(gulp.dest(distPath.css))
    .pipe(browserSync.stream());
  returnTasks;
});

gulp.task('js', function () {
  const lint = gulp.src(srcPath.js)
    .pipe(eslint())
    .pipe(eslint.format());
  const build = gulp.src(srcPath.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distPath.js))
    .pipe(browserSync.stream());
  returnTasks;
});

gulp.task('img', function () {
  gulp.src(srcPath.img)
    .pipe(imagemin([
      mozjpeg({quality: 89}),
      pngquant({quality: 70})
    ], {verbose: true}))
    .pipe(gulp.dest(distPath.img))
    .pipe(browserSync.stream());
});

gulp.task('svg', function () {
  gulp.src(srcPath.svg)
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest(distPath.svg));
});

gulp.task('watch', function () {
  browserSync.init({
    proxy: 'localhost/' + path.basename(__dirname),
    open: false,
  });
  gulp.watch(srcPath.js, ['js']);
  gulp.watch(srcPath.css, ['css']);
  gulp.watch(srcPath.img, ['img']);
  gulp.watch(srcPath.svg, ['svg']);
  gulp.watch(bsReload, browserSync.reload);
});

gulp.task('build', ['js', 'css', 'img', 'svg']);

gulp.task('default', ['build', 'watch']);
