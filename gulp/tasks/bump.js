/*
 * @title Bump
 * @description A task used to bump the bower and package version numbers
 * @summary Allowed bump types: major, minor, patch
 * @default patch
 * @example (cli) env type=major gulp bump
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var bump = require('gulp-bump');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('bump', function () {
  return gulp
    .src(['./bower.json', './package.json'])
    .pipe(bump({
      type: process.env.type
    }))
    .pipe(gulp.dest('./'));
});
