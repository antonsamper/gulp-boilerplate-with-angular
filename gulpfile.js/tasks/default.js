/*
 * @title Default
 * @description A bundle task that generates production ready code
 * @example (cli) gulp
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var runSequence = require('run-sequence');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('default', function () {
  runSequence(
    'purge',
    ['iconfont', 'sass', 'jshint', 'concat'],
    'karma',
    'minifyHtml',
    'imagemin'
  );
});
