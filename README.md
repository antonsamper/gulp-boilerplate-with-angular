<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>
# gulp.js starter single page apps
A clean and simple starter boilerplate for single page applications using gulp.js.

[![MIT License][license-badge]][license-link]
[![Build Status][travis-badge]][travis-link]

###### Installation and Usage
To start using the boilerplate, first install all the dependencies and then run one of the gulp tasks:

 ```
 $ npm i
 $ bower i
 $ gulp dev
 ```

###### Bundle Tasks

Task Name    | Description
------------ | ---------------------------------------------------------------------
`default`    | Output minified production code, asset revisions and run unit tests.
`dev`        | Generate a development environment with watch, karma and browsersync.

###### Individual Tasks

Task Name     | Description
------------- | ----------------------------------------------------
`iconfont`    | Compile icon font and the corresponding Sass.
`browserSync` | Initialise a local server.
`bump`        | Bump the bower and package version numbers.
`concat`      | Concatenate and compress js files.
`imagemin`    | Minify images and svg files.
`jshint`      | Detect js errors.
`karma`       | Run jasmine tests.
`minifyHtml`  | Inject assets into and compress the main index.html.
`purge`       | Delete the output directory.
`revReplace`  | Rewrite occurrences of file names changed by gulp-rev.
`sass`        | Compile Sass to CSS.

[license-badge]: http://img.shields.io/badge/license-mit-lightgrey.svg?style=flat
[license-link]: https://github.com/goodeggs/angular-cached-resource/blob/master/LICENSE.md
[travis-badge]: https://travis-ci.org/antonsamper/gulp-boilerplate.svg?branch=master
[travis-link]: https://travis-ci.org/antonsamper/gulp-boilerplate
