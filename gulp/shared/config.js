var configs = {                                          // set environment
  env: 'prod'
};

var targets = {
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

module.exports = {
  path: targets,
  config: configs
};
