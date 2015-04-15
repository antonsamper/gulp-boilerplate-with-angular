/*
 * @title Jscs
 * @description A task detect js style errors
 * @example (cli) gulp jscs
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var plumber = require('gulp-plumber');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('jscs', function () {
  return gulp
    .src(sharedPaths.jshintSrc)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(jscs());
});
