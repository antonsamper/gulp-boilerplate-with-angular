/*
 * @title RevReplace
 * @description A task to rewrite occurrences of file names changed by gulp-rev
 * @example (cli) gulp revReplace
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var del = require('del');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

var manifest = sharedPaths.outputDir + '/rev-manifest.json';

gulp.task('revReplaceManifest', function () {
  return gulp
    .src(sharedPaths.outputDir + '/**/*.{html,css,js}')
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(revReplace({manifest: gulp.src(manifest)}))
    .pipe(gulp.dest(sharedPaths.outputDir));
});

gulp.task('revPurgeManifest', function () {
  del(manifest);
});

gulp.task('revReplace', function () {
  runSequence(
    'revReplaceManifest',
    'revPurgeManifest'
  );
});
