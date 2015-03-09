/*
 * @title Purge
 * @description A task to delete the output directory
 * @example (cli) gulp purge
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var del = require('del');
var gulp = require('gulp');
var sharedPaths = require('../shared/paths.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('purge', function () {
  del([sharedPaths.outputDir]);
});
