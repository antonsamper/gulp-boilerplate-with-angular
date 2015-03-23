# Starter boilerplate with gulp.js for Single Page Apps
A clean and simple starter boilerplate for single page applications using gulp.js.

To start using the boilerplate, run `npm i` and `bower i` and then run one of the tasks.

[![mit license][license-badge]][license-link]

---

###### Bundle Tasks

Task Name | Description
---------------- | -------------
`default` | A bundle task that generates production ready code with asset revisions, minification and single run unit testing.
`dev` | A bundle task that generates a development environment with code watch, karma ci and browser sync.

###### Individual Tasks

Task Name | Description
------------ | -------------
`iconfont` | A task to generate an icon font from svg files located in `src/fonts/iconfont/` and the corresponding Sass.
`browserSync` | A task to initialise a local server
`bump` | A task to bump the bower and package version numbers.
`concat` | A task concatenate and compress js files.
`imagemin` | A task to minify images and svg files.
`jshint` | A task detect js errors.
`karma` | A task to run jasmine tests.
`minifyHtml` | A task to inject assets into and compress the main index.html.
`purge` | A task to delete the output directory.
`sass` | A task to compile Sass to CSS.

[license-badge]: http://img.shields.io/badge/license-mit-lightgrey.svg?style=flat
[license-link]: https://github.com/goodeggs/angular-cached-resource/blob/master/LICENSE.md
