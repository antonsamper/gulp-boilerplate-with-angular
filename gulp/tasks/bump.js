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

var gulp = require('gulp');                             // gulp core
var bump = require('gulp-bump');                        // bumps version


/*********************************************************************************
 2. TASKS
 *********************************************************************************/

gulp.task('bump', function () {
  var files = ['./bower.json', './package.json'];
  return gulp
    .src(files)
    .pipe(bump({
      type: process.env.type
    }))
    .pipe(gulp.dest('./'));
});
