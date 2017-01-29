'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var jsValidate = require('gulp-jsvalidate');
var jsonlint = require("gulp-jsonlint");

var destJS = './public/js/';
var destCSS = './public/css/';
var vendor = './src/vendor/';
var scripts = './src/scripts/';
var styles = './src/styles';

gulp.task('createScrollBar', function() {
  return gulp.src([vendor + 'scroll-up-bar/scroll-up-bar.js', './public/js/scroll.js'])
    .pipe(concat('./scrollbar.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('createVticker', function() {
  return gulp.src([vendor + '/vticker/jquery.vticker.js', './public/js/ticker.js'])
    .pipe(concat('./vticker.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('createOpenOnDate', function() {
  return gulp.src([scripts + 'open.js', scripts + 'date.js'])
    .pipe(concat('./open-on-date.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('createImageLightbox', function() {
  return gulp.src([vendor + '/imageLightbox/imagelightbox.js', './public/js/myLightbox.js'])
    .pipe(concat('./myImageLightbox.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

gulp.task('minify', function () {
	return gulp.src(['./' + scripts + 'feature.js', './' + scripts + 'overlay.js', './' + scripts + 'locations.js', './' + scripts + 'howManyDaysAgo.js', './' + scripts + 'updateDaysAgo.js', './' + scripts + 'ad.js'])
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest(destJS));
});

gulp.task('turnSassToCss', function () {
	return gulp.src(styles + 'main.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest(destCSS));
});

gulp.task('valid', function () {
    return gulp.src('./' + destJS + '*.js')
    .pipe(jsValidate());
});

gulp.task('default', ['valid', 'createScrollBar', 'createVticker', 'createOpenOnDate', 'createImageLightbox', 'minify', 'turnSassToCss'], function () {
	console.log("All tasks completed");
});
