/*
 * @title Paths
 * @description An object containing shared application paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = {

  js_concat_src: [                                      // js files to concatenate
    'src/js/app.js',
    'src/js/**/*.js',
    '!src/js/**/*.spec.js'
  ],
  output_js_dir: 'dist/js',                             // minified js destination


  srcDir: 'src',
  srcIndex: 'src/index.html',
  outputDir: 'dist',
  outputJs: 'dist/js/**/*.js',
  outputCss: 'dist/css/*.css',
  jshintSrc: [
    'src/js/**/*.js',
    'package.json',
    'bower.json',
    'gulpfile.js',
    '.jshintrc'
  ]
};
