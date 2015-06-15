/*
 * @title Concat
 * @description A task concatenate and compress js files
 * @example (cli) gulp concat
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var bowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');
var size = require('gulp-size');
var uglify = require('gulp-uglify');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('concat', function () {
  return gulp
    .src(bowerFiles().concat(sharedPaths.concatSrc))
    .pipe(size({showFiles: true}))
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(ngAnnotate())
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', uglify()))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', concat('app.min.js')))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', rev()))
    .pipe(gulp.dest(sharedPaths.outputDir + '/js'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(size({showFiles: true}));
});
