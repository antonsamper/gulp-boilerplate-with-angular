/*
 * @title Paths
 * @description An object containing shared application paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = {

  src_index: 'src/index.html',                          // main source file
  srcDir: 'src',                                       // src directory
  sassDir: 'src/sass/**/*.scss',                       // all sass files
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

  outputJs: 'dist/js/**/*.js',
  outputDir: 'dist',
  outputCss: 'dist/css/*.css'
};
