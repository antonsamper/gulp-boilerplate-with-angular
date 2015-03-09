/*
 * @title BrowserSync
 * @description A task to initialise a local server
 * @example (cli) gulp browserSync
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var browserSync = require('browser-sync');
var gulp = require('gulp');
var sharedPaths = require('../shared/paths.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('browserSync', function () {
  browserSync.init([
    sharedPaths.outputJs,
    sharedPaths.outputCss
  ], {
    server: {
      baseDir: sharedPaths.outputDir
    },
    open: true,
    notify: false,
    scrollProportionally: true
  });
});
