/*
 * @title Paths
 * @description An object containing shared application paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = {
  srcDir: 'src',
  srcIndex: 'src/index.html',
  srcImages: 'src/images/**/*.{jpg,png,gif,svg}',
  srcIconFont: 'src/fonts/iconfont/*.svg',
  outputDir: 'dist',
  outputJs: 'dist/js/**/*.js',
  outputCss: 'dist/css/*.css',
  jshintSrc: [
    'src/js/**/*.js',
    'package.json',
    'bower.json',
    'gulpfile.js',
    '.jshintrc'
  ],
  concatSrc: [
    'src/js/app.js',
    'src/js/**/*.js',
    '!src/js/**/*.spec.js'
  ]
};
