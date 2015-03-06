/*
 * @title Purge
 * @description A task delete everything in the output directory
 * @example (cli) gulp purge
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var config = require('../shared/config.js');
var del = require('del');
var gulp = require('gulp');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('purge', function () {
  del([config.path.outputDir + '/**/*']);
});
