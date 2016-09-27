/* =====================================================================
 * GULPFILE FOR SPACEMAN 1.9.0
 * ===================================================================*/
/*global require*/

//-------------------------------------------------------------------
// SET VARIABLES
//-------------------------------------------------------------------

var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    cssmin     = require('gulp-cssmin'),
    uglify     = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    combineMq  = require('gulp-combine-mq');

//-------------------------------------------------------------------
// BUILD CSS
//-------------------------------------------------------------------

gulp.task('buildCSS', function () {

    'use strict';

    gulp.src([
        'assets/css/src/reset.css',
        'assets/css/src/grid.css',
        'assets/css/src/typography.css',
        'assets/css/src/base.css',
        'assets/css/src/form.css',
        'assets/css/src/navigation.css',
        'assets/css/src/layout.css',
        'assets/css/src/flexslider.css'
    ])
        .pipe(concat('global-styles.css'))
        .pipe(combineMq())
        .pipe(cssmin())
        .pipe(gulp.dest('assets/css/dist'))
        .pipe(livereload());

});

//-------------------------------------------------------------------
// BUILD JS
//-------------------------------------------------------------------

gulp.task('buildJS', function () {

    'use strict';

    gulp.src([
        'assets/js/src/*.js'
    ])
        .pipe(concat('global-js.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/dist'))
        .pipe(livereload());
});

//-------------------------------------------------------------------
// GULP WATCH+DEFAULT
//-------------------------------------------------------------------

gulp.task('watch', function () {

    'use strict';

    livereload.listen();

    gulp.watch(['assets/js/src/*.js'], ['buildJS']);
    gulp.watch(['assets/css/src/*.css'], ['buildCSS']);
    gulp.watch(['./**/*.php', './**/*.htm'], livereload.reload);

});

gulp.task('default', ['watch']);
