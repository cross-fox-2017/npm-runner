'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('default', function() {
  return gulp.src(['./lib/script1.js', './lib/script2.js', './lib/script3.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
  return gulp.src(['./css/style1.css', './css/style2.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('browser-sync', function () {
   var files = [
      'lib/css/*.css',
      'lib/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});
