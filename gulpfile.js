/* =====================================================================
 * GULPFILE FOR SPACEMAN
 * ===================================================================*/
/*jslint node: true */
'use strict';

//-------------------------------------------------------------------
// SET VARIABLES
//-------------------------------------------------------------------

var browserSync = require('browser-sync').create(),
    gulp        = require('gulp'),
    combineMq   = require('gulp-combine-mq'),
    concat      = require('gulp-concat'),
    cssmin      = require('gulp-cssmin'),
    imagemin    = require('gulp-imagemin'),
    postcss     = require('gulp-postcss'),
    uglify      = require('gulp-uglify'),
    mozjpeg     = require('imagemin-mozjpeg'),
    pngquant    = require('imagemin-pngquant'),
    cssNext     = require('postcss-cssnext'),
    mixins      = require('postcss-sassy-mixins'),
    path        = require('path'),
    basePath = {
        src:  'assets/src/',
        dist: 'assets/dist/'
    },
    srcPath = {
        css: basePath.src + 'css/*.css',
        js:  basePath.src + 'js/*.js',
        img: basePath.src + 'img/*.{png,gif,jpg}',
        svg: basePath.src + 'svg/*.svg',
    },
    distPath = {
        css: basePath.dist + 'css',
        js:  basePath.dist + 'js',
        img: basePath.dist + 'img',
        svg: basePath.dist + 'svg',
    },
    bsReload = ['./**/*.{html,php}', srcPath.svg];

//-------------------------------------------------------------------
// BUILD CSS
//-------------------------------------------------------------------

gulp.task('css', function () {
    var plugins = [
        cssNext(),
        mixins()
    ];
    gulp.src(srcPath.css)
        .pipe(concat('style.css'))
        .pipe(postcss(plugins))
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
        ], {verbose: true}))
        .pipe(gulp.dest(distPath.img))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// MINIFY SVG
//-------------------------------------------------------------------

gulp.task('svg', function () {
    gulp.src(srcPath.svg)
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest(distPath.svg));
});

//-------------------------------------------------------------------
// WATCH + DEFAULT
//-------------------------------------------------------------------

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
