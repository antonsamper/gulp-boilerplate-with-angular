/*
 * @title ESLint
 * @description A task for javascript linting
 * @example (cli) gulp jscs
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('eslint', function () {
  return gulp
    .src(sharedPaths.eslintSrc)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(eslint())
    .pipe(eslint.format());
});
