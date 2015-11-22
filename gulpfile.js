'use strict';
 
var gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	rename 			= require('gulp-rename'),
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify'),
	gutil 			= require('gulp-util');
 
gulp.task('sass', function () {
	return sass('src/sass/**/*.scss', { style: 'expanded', compass: true, verbose: true })
        .pipe(gulp.dest('./build/css'));
});

/* this would be used to compile js for dev but we'll let require do its thing locally */
// gulp.task('js-dev', function(){
// 	return gulp.src(['./src/js/**/*.js'])
// 		.pipe(concat('main.js'))
// 		.pipe(gulp.dest('build/js'));
// });

/* this would be used to compile js for prod */
// gulp.task('js-prod', function(){
// 	return gulp.src(['./src/js/**/*.js'])
// 		.pipe(concat('main.js'))
// 		.pipe(gulp.dest('build/js'));
// });
 
gulp.task('default', function () {
  gulp.watch(['src/sass/**/*.scss','src/sass/**/*.css'], ['sass']);
});

