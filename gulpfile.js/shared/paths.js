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
  srcImages: ['src/**/*.{jpg,png,gif,svg}', '!src/fonts/**/*.svg'],
  srcIconFont: 'src/fonts/iconfont/*.svg',
  outputDir: 'dist',
  outputJs: 'dist/js/**/*.js',
  outputCss: 'dist/css/*.css',
  jsPartialsSrc: 'src/js/**/*.html',
  jsPartialsFile: 'templates',
  eslintSrc: [
    'src/js/**/*.js',
    'package.json',
    'bower.json',
    'gulpfile.js',
    '.eslintrc'
  ],
  concatSrc: [
    'src/js/**/common/**/*.js',
    'src/js/**/angular/**/*.js',
    'src/js/**/*.js',
    '!src/js/**/*.spec.js'
  ]
};
