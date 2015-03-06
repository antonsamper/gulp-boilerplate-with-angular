/*
 * @title BrowserSync
 * @description A task used to initialise a local server with auto reload
 * @example (cli) gulp browserSync
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var config = require('../shared/config.js');
var browserSync = require('browser-sync');
var gulp = require('gulp');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('browserSync', function () {
  browserSync.init([config.path.outputJs, config.path.outputCss], {
    server: {
      baseDir: config.path.outputDir
    },
    open: true,
    notify: false,
    scrollProportionally: true
  });
});