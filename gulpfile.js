'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('compile-scss', () => {
	return gulp.src('css/source/main.scss')
		.pipe(sass())
		.pipe(rename('style.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('css/'));
});

gulp.task('default', () => {
	gulp.watch('css/source/*.scss', ['compile-scss']);
});
