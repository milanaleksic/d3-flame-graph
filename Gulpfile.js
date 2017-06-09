var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  notify = require("gulp-notify"),
  rename = require('gulp-rename'),
  minifycss = require('gulp-minify-css'),
  del = require('del');

gulp.task('clean', function() {
  del(['dist'])
});

gulp.task('scripts', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('d3.flameGraph.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Scripts task complete.' }));
});

gulp.task('styles', function() {
  return gulp.src('src/**/*.css', { style: 'expanded' })
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('dist', ['clean', 'scripts', 'styles']);
