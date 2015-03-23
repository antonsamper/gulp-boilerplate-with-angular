/*
 * @title Iconfont
 * @description A task to generate an icon font from svg files
 * @example (cli) gulp iconfont
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var configIconfont = require('../../config/iconfont.js');
var generator = require('./generator.js');
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var plumber = require('gulp-plumber');
var sharedPaths = require('../../shared/paths.js');
var sharedEvents = require('../../shared/events.js');
var size = require('gulp-size');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('iconfont', function () {
  return gulp
    .src(sharedPaths.srcIconFont)
    .pipe(size({showFiles: true}))
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(iconfont({
      fontName: configIconfont.name,
      appendCodepoints: configIconfont.codepoints,
      normalize: configIconfont.normalize
    }))
    .on('codepoints', generator)
    .pipe(gulp.dest(sharedPaths.outputDir + '/fonts'))
    .pipe(size({showFiles: true}));
});
