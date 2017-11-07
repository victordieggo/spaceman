'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var stylelint = require('gulp-stylelint');
var combineMq = require('gulp-combine-mq');
var cssmin = require('gulp-cssmin');
var postcss = require('gulp-postcss');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();
var path = require('path');

var postcssPlugins = [
  require('precss'),
  require('postcss-cssnext')
];

var basePath = {
  src:  'assets/src/',
  dist: 'assets/dist/'
};

var srcPath = {
  cfg: basePath.src + 'css/config.css',
  css: basePath.src + 'css/*.css',
  js:  basePath.src + 'js/*.js',
  img: basePath.src + 'img/*.{png,gif,jpg}',
  svg: basePath.src + 'svg/*.svg',
};

var distPath = {
  css: basePath.dist + 'css',
  js:  basePath.dist + 'js',
  img: basePath.dist + 'img',
  svg: basePath.dist + 'svg',
};

var bsReload = ['./**/*.{html,php}', srcPath.svg];

gulp.task('css', function () {
  gulp.src([srcPath.cfg, srcPath.css])
    .pipe(stylelint({
      failAfterError: false,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(concat('style.css'))
    .pipe(postcss(postcssPlugins))
    .pipe(combineMq())
    .pipe(cssmin())
    .pipe(gulp.dest(distPath.css))
    .pipe(browserSync.stream());
});

gulp.task('js', function () {
  gulp.src(srcPath.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distPath.js))
    .pipe(browserSync.stream());
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

gulp.task('default', ['js', 'css', 'img', 'svg', 'watch']);
