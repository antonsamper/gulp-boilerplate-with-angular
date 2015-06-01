/*
 * @title ngHtml2Js
 * @description A task to convert HTML templates to AngularJS modules and insert them into the $templateCache
 * @example (cli) gulp ngHtml2Js
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var concat = require('gulp-concat');
var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var ngHtml2Js = require("gulp-ng-html2js");
var plumber = require("gulp-plumber");
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');
var size = require('gulp-size');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('ngHtml2Js', function () {
  return gulp
    .src(sharedPaths.jsPartialsSrc)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      moduleName: function (file) {
        var pathParts = file.path.split('/');
        var folder = pathParts[pathParts.length - 2];
        return folder.replace(/-[a-z]/g, function (match) {
          return match.substr(1).toUpperCase();
        });
      },
      prefix: '/js/'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(sharedPaths.srcDir + '/js'))
    .pipe(size({showFiles: true}));
});
