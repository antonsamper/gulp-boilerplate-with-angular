/*
 * @title Imagemin
 * @description A task to minify images and svg files
 * @example (cli) gulp imagemin
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('imagemin', function () {
  return gulp
    .src(sharedPaths.srcImages)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(imagemin())
    .pipe(gulp.dest(sharedPaths.outputDir + '/images'));
});
