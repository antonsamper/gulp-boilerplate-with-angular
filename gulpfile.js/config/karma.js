/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var bowerFiles = require('main-bower-files');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = function (config) {

  var files = bowerFiles().concat([
    'src/js/**/*.js',
    'src/js/**/*.spec.js'
  ]);

  config.set({
    basePath: __dirname + '/../../',
    frameworks: ['jasmine'],
    files: files,
    browsers: ['PhantomJS']
  });

};
