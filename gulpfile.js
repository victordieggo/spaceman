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
    path        = require('path');

//-------------------------------------------------------------------
// BUILD CSS
//-------------------------------------------------------------------

gulp.task('css', function () {
    gulp.src([
        'assets/css/src/reset.css',
        'assets/css/src/grid.css',
        'assets/css/src/typography.css',
        'assets/css/src/base.css',
        'assets/css/src/form.css',
        'assets/css/src/buttons.css',
        'assets/css/src/navigation.css',
        'assets/css/src/layout.css'
    ])
        .pipe(concat('style.css'))
        .pipe(combineMq())
        .pipe(cssmin())
        .pipe(gulp.dest('assets/css/dist'))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// BUILD JS
//-------------------------------------------------------------------

gulp.task('js', function () {
    gulp.src([
        'assets/js/src/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/dist'))
        .pipe(browserSync.stream());
});

//-------------------------------------------------------------------
// GULP WATCH+DEFAULT
//-------------------------------------------------------------------

gulp.task('watch', function () {
    browserSync.init({
        proxy: 'localhost/' + path.basename(__dirname)
    });
    gulp.watch(['assets/js/src/*.js'], ['js']);
    gulp.watch(['assets/css/src/*.css'], ['css']);
    gulp.watch(['./**/*.html', './**/*.php'], browserSync.reload);
});

gulp.task('default', ['js', 'css', 'watch']);
