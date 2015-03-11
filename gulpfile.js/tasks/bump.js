/*
 * @title Bump
 * @description A task to bump the bower and package version numbers
 * @summary Allowed bump types: major, minor, patch
 * @default patch
 * @example (cli) env BUMP_TYPE=major gulp bump
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var bump = require('gulp-bump');
var gulp = require('gulp');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('bump', function () {
  return gulp
    .src(['./bower.json', './package.json'])
    .pipe(bump({
      type: process.env.BUMP_TYPE
    }))
    .pipe(gulp.dest('./'));
});
