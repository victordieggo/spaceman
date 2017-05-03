/* =====================================================================
 * GULPFILE FOR SPACEMAN
 * ===================================================================*/
/*jslint node: true */
'use strict';

//-------------------------------------------------------------------
// SET VARIABLES
//-------------------------------------------------------------------

var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    cssmin      = require('gulp-cssmin'),
    uglify      = require('gulp-uglify'),
    combineMq   = require('gulp-combine-mq'),
    browserSync = require('browser-sync').create(),
    imagemin    = require('gulp-imagemin'),
    mozjpeg     = require('imagemin-mozjpeg'),
    pngquant    = require('imagemin-pngquant'),
    path        = require('path'),
    srcPath = {
        css: 'assets/css/src/*.css',
        js:  'assets/js/src/*.js',
        img: 'assets/img/src/*.{png,gif,jpg}',
        svg: 'assets/svg/src/*.svg',
    },
    distPath = {
        css: 'assets/css/dist',
        js:  'assets/js/dist',
        img: 'assets/img/dist',
        svg: 'assets/svg/dist',
    },
    bsReload = ['./**/*.{html,php}', srcPath.svg];

//-------------------------------------------------------------------
// BUILD CSS
//-------------------------------------------------------------------

gulp.task('css', function () {
    gulp.src(srcPath.css)
        .pipe(concat('style.css'))
        .pipe(combineMq())
        .pipe(cssmin())
        .pipe(gulp.dest(distPath.css))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// BUILD JS
//-------------------------------------------------------------------

gulp.task('js', function () {
    gulp.src(srcPath.js)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distPath.js))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// MINIFY IMAGES
//-------------------------------------------------------------------

gulp.task('img', function () {
    gulp.src(srcPath.img)
        .pipe(imagemin([
            mozjpeg({quality: 89}),
            pngquant({quality: 70})
        ]))
        .pipe(gulp.dest(distPath.img))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// MINIFY SVG
//-------------------------------------------------------------------

gulp.task('svg', function () {
    gulp.src(srcPath.svg)
        .pipe(imagemin())
        .pipe(gulp.dest(distPath.svg))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// WATCH + DEFAULT
//-------------------------------------------------------------------

gulp.task('watch', function () {
    browserSync.init({
        proxy: 'localhost/' + path.basename(__dirname)
    });
    gulp.watch(srcPath.js, ['js']);
    gulp.watch(srcPath.css, ['css']);
    gulp.watch(srcPath.img, ['img']);
    gulp.watch(srcPath.svg, ['svg']);
    gulp.watch(bsReload, browserSync.reload);
});

gulp.task('default', ['js', 'css', 'img', 'svg', 'watch']);
