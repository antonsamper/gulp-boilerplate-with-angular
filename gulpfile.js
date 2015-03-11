


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var browserSync = require('browser-sync');              // inject code to all devices
var gulp = require('gulp');                             // gulp core
var concat = require('gulp-concat');                    // file concatenation
var debug = require('gulp-debug');                      // debug mode
var gulpif = require('gulp-if');                        // conditionals inside config
var iconfont = require('gulp-iconfont');                // icon font builder
var inject = require("gulp-inject");                    // asset injection
var plumber = require('gulp-plumber');                  // disable interruptions
var rev = require('gulp-rev');                          // file revisions
var uglify = require('gulp-uglify');                    // js minification
var gutil = require('gulp-util');                       // gulp utilities
var bowerFiles = require('main-bower-files');           // bower modules includes
var runSequence = require('run-sequence');              // tasks in sequence



/*
 gulpfile.js
 ===========
 Rather than manage one giant configuration file responsible
 for creating multiple tasks, each task has been broken out into
 its own file in gulp/tasks. Any files in that directory get
 automatically required below.
 To add a new task, simply add a new task file that directory.
 gulp/tasks/default.js specifies the default set of tasks to run
 when you run `gulp`.
 */

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });


/*********************************************************************************
 2. CONFIG AND FILE DESTINATIONS (RELATIVE TO ASSETS FOLDER)
 *********************************************************************************/

var config = {                                          // set environment
  env: 'prod'
};

var target = {
  app_json: [                                           // app related files
    './bower.json',
    './package.json'
  ],
  src_index: 'src/index.html',                          // main source file
  output: 'dist',                                       // output directory
  sassDir: 'src/sass/**/*.scss',                       // all sass files
  jshintSrc: [                                        // js to lint
    'src/js/**/*.js',
    'package.json',
    'bower.json',
    'gulpfile.js',
    '.jshintrc'
  ],
  js_concat_src: [                                      // js files to concatenate
    'src/js/app.js',
    'src/js/**/*.js',
    '!src/js/**/*.spec.js'
  ],
  srcDir: 'src',
  output_js_dir: 'dist/js',                             // minified js destination
  output_js_files: 'dist/js/**/*.js',                   // minified js files
  output_css_files: 'dist/css/*.css'                    // minified css files
};





/*************************************************************************************
 4. JS LINT AND CONCAT
 *************************************************************************************/

var sharedEvents = require(__dirname + '/gulp/shared/events.js');


gulp.task('js-concat', function () {
  var files = bowerFiles().concat(target.js_concat_src);
  return gulp
    .src(files)                                         // gather the files
    .pipe(plumber({                                     // keep running on errors
      errorHandler: sharedEvents.onError
    }))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', uglify()))       // uglify the files
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', concat('app.min.js')))  // concat to one file
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', rev()))          // apply revision
    .pipe(gulp.dest(target.output_js_dir))              // output files
    .pipe(browserSync.reload({stream: true}));          // browser sync reload
});
