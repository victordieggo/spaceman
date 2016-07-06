// VARS
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

// CONCAT/MINIFY CSS
gulp.task('cssmin', function(){
	gulp.src(['css/reset.css', 'css/grid.css', 'css/typography.css', 'css/base.css', 'css/layout.css', 'css/flexslider.css', 'css/font-awesome.css'])
		.pipe(concat('global-styles.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('css'))
        .pipe(livereload());
});

// CONCAT/MINIFY JS
gulp.task('jsmin', function(){
	gulp.src(['js/*.js', '!js/global-js.js*', '!js/jquery.min*'])
		.pipe(concat('global-js.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
        .pipe(livereload());
});

// Gulp Watch
gulp.task('watch', function(){
    livereload.listen();
	gulp.watch(['js/*.js', '!js/global-js.js*'], ['jsmin']);
	gulp.watch(['css/*.css', '!css/global-styles.css*'], ['cssmin']);
    gulp.watch('*.php', livereload.reload);
})

gulp.task('default', ['watch'], function() {
});