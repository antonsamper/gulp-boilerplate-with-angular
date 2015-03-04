/*********************************************************************************
 0. GLOBALS
 *********************************************************************************/

var onError = function (err) {
  gutil.log(gutil.colors.red(err.plugin) + ': ' + gutil.colors.yellow(err.message));
  gutil.beep();
  this.emit('end');
};


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var browserSync = require('browser-sync');              // inject code to all devices
var del = require('del');                               // delete files and folders
var gulp = require('gulp');                             // gulp core
var autoprefixer = require('gulp-autoprefixer');        // sets browser prefixes
var bump = require('gulp-bump');                        // bumps version
var concat = require('gulp-concat');                    // file concatenation
var csso = require('gulp-csso');                        // advanced css minification
var debug = require('gulp-debug');                      // debug mode
var gulpif = require('gulp-if');                        // conditionals inside config
var iconfont = require('gulp-iconfont');                // icon font builder
var imagemin = require('gulp-imagemin');                // image minification
var inject = require("gulp-inject");                    // asset injection
var jshint = require('gulp-jshint');                    // js validation
var karma = require('karma').server;                    // karma
var minifyHtml = require('gulp-minify-html');           // html minification
var plumber = require('gulp-plumber');                  // disable interruptions
var rev = require('gulp-rev');                          // file revisions
var sass = require('gulp-sass');                        // sass compiler
var sourcemaps = require('gulp-sourcemaps');            // sourcemaps
var uglify = require('gulp-uglify');                    // js minification
var gutil = require('gulp-util');                       // gulp utilities
var stylish = require('jshint-stylish');                // style for jshint errors
var bowerFiles = require('main-bower-files');           // bower modules includes
var runSequence = require('run-sequence');              // tasks in sequence


/*********************************************************************************
 2. FILE DESTINATIONS (RELATIVE TO ASSETS FOLDER) AND ENVIRONMENT
 *********************************************************************************/

var env = process.env.NODE_ENV || 'dev';                // set env - 'prod' or 'dev'
var target = {
  app_json: [                                           // app related files
    './bower.json',
    './package.json'
  ],
  src_index: 'src/index.html',                          // main source file
  output: 'dist',                                       // output directory
  scss_src: 'src/scss/*.scss',                          // main files with imports
  scss_all: 'src/scss/**/*.scss',                       // all scss files
  scss_output: 'dist/css',                              // compiled scss destination
  js_lint_src: [                                        // js to lint
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
  images_src: 'src/images/**/*.{jpg,png,gif,svg}',      // all images to compress
  images_output: 'dist/images',                         // compressed images folder
  output_js_dir: 'dist/js',                             // minified js destination
  output_js_files: 'dist/js/**/*.js',                   // minified js files
  output_css_files: 'dist/css/*.css'                    // minified css files
};


/*********************************************************************************
 3. PROCESS SCSS
 *********************************************************************************/

gulp.task('scss', function () {
  return gulp
    .src(target.scss_src)                               // gather the files
    .pipe(plumber({                                     // keep running on errors
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())                            // initialise sourcemaps
    .pipe(sass())                                       // compile all scss
    .pipe(sourcemaps.write())                           // write out the sourcemaps
    .pipe(autoprefixer('last 2 version'))               // add vendor prefixes
    .pipe(gulpif(env === 'prod', csso()))               // minify css [prod]
    .pipe(gulpif(env === 'prod', rev()))                // apply revision [prod]
    .pipe(gulp.dest(target.scss_output))                // output files
    .pipe(browserSync.reload({stream: true}));          // browser sync reload
});


/*************************************************************************************
 4. JS LINT AND CONCAT
 *************************************************************************************/

gulp.task('js-lint', function () {
  return gulp
    .src(target.js_lint_src)                            // gather the files
    .pipe(plumber({                                     // keep running on errors
      errorHandler: onError
    }))
    .pipe(jshint())                                     // lint the files
    .pipe(jshint.reporter(stylish));                    // present the results
});

gulp.task('js-concat', function () {
  var files = bowerFiles().concat(target.js_concat_src);
  return gulp
    .src(files)                                         // gather the files
    .pipe(plumber({                                     // keep running on errors
      errorHandler: onError
    }))
    .pipe(gulpif(env === 'prod', uglify()))             // uglify the files [prod]
    .pipe(gulpif(env === 'prod', concat('app.min.js'))) // concat to one file [prod]
    .pipe(gulpif(env === 'prod', rev()))                // apply revision [prod]
    .pipe(gulp.dest(target.output_js_dir))              // output files
    .pipe(browserSync.reload({stream: true}));          // browser sync reload
});


/*********************************************************************************
 5. HTML COMPRESSION
 *********************************************************************************/

gulp.task('html', function () {
  var files = [target.output_css_files, target.output_js_files];
  return gulp
    .src(target.src_index)                              // gather the files
    .pipe(plumber({                                     // keep running on errors
      errorHandler: onError
    }))
    .pipe(inject(gulp.src(files, {read: false}), {     // injected files options
      ignorePath: 'dist',
      addRootSlash: false
    }))
    .pipe(minifyHtml({                                  // minify html options
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(gulp.dest(target.output));                    // output files
});


/*********************************************************************************
 6. IMAGE COMPRESSION
 *********************************************************************************/

gulp.task('images', function () {
  return gulp
    .src(target.images_src)                             // gather the files
    .pipe(plumber({                                     // keep running on errors
      errorHandler: onError
    }))
    .pipe(imagemin())                                   // compress images
    .pipe(gulp.dest(target.images_output));             // output files
});


/*********************************************************************************
 7. BROWSER SYNC
 *********************************************************************************/

gulp.task('browser-sync', function () {
  var files = ['css/*.css', 'js/*.js'];                 // files to inject
  var options = {                                       // browser sync options
    server: {baseDir: target.output},
    open: true,
    notify: false,
    scrollProportionally: true
  };
  browserSync.init(files, options);
});


/*********************************************************************************
 8. CLEAN UP
 *********************************************************************************/

gulp.task('dist-clean', function () {
  del([target.output + '/**/*']);
});


/*********************************************************************************
 9. TESTS
 *********************************************************************************/

gulp.task('unit-tests', function () {
  var runType = (env === 'prod');
  return karma.start({                                  // run karma unit tests
    configFile: __dirname + '/karma.conf.js',
    singleRun: runType
  });
});


/*********************************************************************************
 11. VERSIONING
 *********************************************************************************/

var versionBump = function (type) {
  return gulp
    .src(target.app_json)                               // files to bump
    .pipe(bump({                                        // bump version on release
      type: type
    }))
    .pipe(gulp.dest('./'));
};

gulp.task('major-version-bump', function () {
  versionBump('major');
});

gulp.task('minor-version-bump', function () {
  versionBump('minor');
});

gulp.task('patch-version-bump', function () {
  versionBump('patch');
});


/*********************************************************************************
 12. TASKS
 *********************************************************************************/

gulp.task('default', function () {
  runSequence(
    'dist-clean',
    ['scss', 'js-lint', 'js-concat'],
    'unit-tests',
    'html',
    'images',
    'browser-sync'
  );
  gulp.watch(target.scss_all, ['scss']);
  gulp.watch(target.js_lint_src, ['js-lint']);
  gulp.watch(target.js_concat_src, ['js-concat']);
});

gulp.task('test', function () {
  runSequence('unit-tests');
});
