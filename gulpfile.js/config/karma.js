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

  var files = bowerFiles().concat([
    sharedPaths.srcDir + '/js/**/*.js',
    sharedPaths.srcDir + '/js/**/*.spec.js'
  ]);

  config.set({
    basePath: __dirname + '/../../',
    frameworks: ['jasmine'],
    files: files,
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/js/**/*.js': ['coverage']
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
