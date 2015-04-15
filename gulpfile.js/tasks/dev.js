/*
 * @title Dev
 * @description A bundle task that generates a development environment
 * @example (cli) gulp dev
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var browserSync = require('browser-sync');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var sharedPaths = require('../shared/paths.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('dev', function () {

  process.env.ENVIRONMENT_TYPE = 'dev';

  runSequence(
    'purge',
    'iconfont',
    'sass',
    'jshint',
    'jscs',
    'concat',
    ['karma', 'minifyHtml', 'imagemin'],
    'move',
    'browserSync'
  );

  gulp.watch(sharedPaths.srcIndex, ['minifyHtml']);
  gulp.watch(sharedPaths.srcDir + '/sass/**/*.scss', ['sass']);
  gulp.watch(sharedPaths.jshintSrc, ['jshint', 'jscs']);
  gulp.watch(sharedPaths.concatSrc, ['concat']);
  gulp.watch(sharedPaths.srcImages, ['imagemin']);
  gulp.watch(sharedPaths.srcIconFont, ['iconfont']);

});
