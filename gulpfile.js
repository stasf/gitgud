var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	del = require('del');


gulp.task('styles', function() {
  return gulp.src('./styles/main.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./styles'));
    // .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', function() {
	gulp.start('styles');
	gulp.watch('./styles/main.scss', ['styles']);
});