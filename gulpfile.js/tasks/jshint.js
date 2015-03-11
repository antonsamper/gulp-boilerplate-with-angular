/*
 * @title Jshint
 * @description A task detect js errors
 * @example (cli) gulp jshint
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var plumber = require('gulp-plumber');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('jshint', function () {
  return gulp
    .src(sharedPaths.jshintSrc)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});
