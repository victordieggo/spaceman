/* ====================================================================================================================
 * GULPFILE FOR SPACEMAN 1.9
 * ====================================================================================================================*/
/*global require*/

// VARS
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

// BUILD CSS
gulp.task('buildCSS', function () {
    'use strict';
	gulp.src(['css/reset.css', 'css/grid.css', 'css/typography.css', 'css/base.css', 'css/layout.css', 'css/flexslider.css', 'css/font-awesome.css'])
		.pipe(concat('global-styles.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('css'))
        .pipe(livereload());
});

// BUILD JS
gulp.task('buildJS', function () {
    'use strict';
	gulp.src(['js/*.js', '!js/global-js.js*', '!js/jquery.min*'])
		.pipe(concat('global-js.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
        .pipe(livereload());
});

// GULP WATCH
gulp.task('watch', function () {
    'use strict';
    livereload.listen();
	gulp.watch(['js/*.js', '!js/global-js.js*'], ['buildJS']);
	gulp.watch(['css/*.css', '!css/global-styles.css*'], ['buildCSS']);
    gulp.watch(['*.php', '*.htm', '*.jpg', '.png'], livereload.reload);
});

gulp.task('default', ['watch']);