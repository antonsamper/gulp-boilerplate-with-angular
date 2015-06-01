/*
 * @title Karma
 * @description A task to run jasmine tests
 * @example (cli) gulp karma
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var karma = require('karma').server;
var runSequence = require('run-sequence');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('karma', function () {
  return karma.start({
    configFile: __dirname + '/../config/karma.js',
    singleRun: process.env.ENVIRONMENT_TYPE !== 'dev'
  });
});

gulp.task('karmaSingle', function () {
  runSequence(
    'ngHtml2Js',
    'karma'
  );
});
