'use strict';

/**
  CMU TREBLEMAKERS WEBSITE
  COPYRIGHT DEREK BROWN 2016
  ALL RIGHTS RESERVED.
**/

/* IMPORTS */

  // Gulp
  var gulp = require('gulp');
  var rename = require("gulp-rename");

  // Bower
  var bower = require('gulp-bower');

  // Sass
  var sass = require('gulp-sass');

  // Image Resize
  var imageResize = require('gulp-image-resize');

/* BOWER */
gulp.task('bower', function() {
  return bower();
});

/* SASS */
  gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

/* MEMBER IMAGES */
  gulp.task('members', function(){
    return gulp.src(['./img/members/*.jpg', '!./img/members/*.sm.jpg'])
               .pipe(imageResize({
                    width: 300,
                    height: 440,
                    crop: true,
                    format: 'jpg'
                }))
               .pipe(rename(function (path) { path.basename += ".sm"; }))
               .pipe(gulp.dest('./img/members'));
  });

/* DEFAULT TASK */
  gulp.task('default', ['bower','sass','members']);
