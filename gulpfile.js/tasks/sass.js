/*
 * @title Sass
 * @description A task to compile Sass to CSS
 * @example (cli) gulp sass
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var sharedPaths = require('../shared/paths.js');
var sharedEvents = require('../shared/events.js');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('sass', function () {
  return gulp
    .src([sharedPaths.srcDir + '/sass/*.scss', '!' + sharedPaths.srcDir + '/sass/_*.scss'])
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE === 'dev', sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE === 'dev', sourcemaps.write()))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', csso()))
    .pipe(gulpif(process.env.ENVIRONMENT_TYPE !== 'dev', rev()))
    .pipe(gulp.dest(sharedPaths.outputDir + '/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(size({showFiles: true}));
});
