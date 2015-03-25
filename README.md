# Starter boilerplate with gulp.js for Single Page Apps
A clean and simple starter boilerplate for single page applications using gulp.js.

To start using the boilerplate, run `npm i` and `bower i` and then run one of the tasks.

[![MIT License][license-badge]][license-link]
[![Build Status][travis-badge]][travis-link]

---

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
`karma`       | Inject assets into and compress the main index file.
`purge`       | Delete the output directory.
`sass`        | Compile Sass to CSS.

[license-badge]: http://img.shields.io/badge/license-mit-lightgrey.svg?style=flat
[license-link]: https://github.com/goodeggs/angular-cached-resource/blob/master/LICENSE.md
[travis-badge]: https://travis-ci.org/antonsamper/gulp-boilerplate.svg?branch=master
[travis-link]: https://travis-ci.org/antonsamper/gulp-boilerplate
