/*
 * @title Move
 * @description A task move src files to the dist folder
 * @example (cli) gulp move
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('move', function () {

  var files = [
    './' + sharedPaths.srcDir + '/fonts/*.{eot,svg,ttf,woff}'
  ];

  return gulp
    .src(files, {
      base: './' + sharedPaths.srcDir
    })
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(gulp.dest(sharedPaths.outputDir))

});
