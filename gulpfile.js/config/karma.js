/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var bowerFiles = require('main-bower-files');
var sharedPaths = require('../shared/paths.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = function (config) {

  var basePath = __dirname + '/../..';
  var files = bowerFiles({
    paths: {
      bowerDirectory: basePath + '/bower_components',
      bowerJson: basePath + '/bower.json'
    }
  }).concat([
    __dirname + '/karma-helpers.js',
    basePath + '/node_modules/angular-mocks/angular-mocks.js',
    sharedPaths.srcDir + '/js/**/common/**/*.js',
    sharedPaths.srcDir + '/js/**/angular/**/*.js',
    sharedPaths.srcDir + '/js/**/*.js'
  ]);

  config.set({
    basePath: basePath,
    frameworks: ['jasmine'],
    files: files,
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/js/**/!(*spec|*templates).js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: sharedPaths.outputDir + '/reports/coverage/',
        subdir: function (browser) {
          return browser.toLowerCase().split(/[ /-]/)[0];
        }
      }, {
        type: 'text-summary'
      }]
    }
  });

};
