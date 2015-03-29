/*
 * @title Imagemin
 * @description A task to minify images and svg files
 * @example (cli) gulp imagemin
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('imagemin', function () {
  return gulp
    .src(sharedPaths.srcImages)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(imagemin())
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', rev()))
    .pipe(gulp.dest(sharedPaths.outputDir))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', rev.manifest()))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', gulp.dest(sharedPaths.outputDir)));
});
