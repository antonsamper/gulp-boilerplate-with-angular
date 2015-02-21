// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: __dirname,
    frameworks: ['jasmine'],
    files: [
      'src/js/app.js',
      'src/js/**/*.js',
      'src/js/**/*.spec.js'
    ],
    browsers: ['PhantomJS']
  });
};
