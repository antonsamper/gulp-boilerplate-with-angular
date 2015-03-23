# Starter boilerplate with gulp.js for Single Page Apps
A clean and simple starter boilerplate for single page applications using gulp.js.

To start using the boilerplate, run `npm i` and `bower i` and then run one of the tasks.

[![mit license][license-badge]][license-link]

---

###### Bundle Tasks

Task | Description
------------ | -------------
`gulp` | A bundle task that generates production ready code with asset revisions, minification and single run unit testing.
`gulp dev` | A bundle task that generates a development environment with code watch, karma ci and browser sync.

###### Individual Tasks

Task | Description
------------ | -------------
`gulp iconfont` | A task to generate an icon font from svg files located in `src/fonts/iconfont/` and the corresponding Sass.
`gulp browserSync` | A task to initialise a local server
`gulp bump` | A task to bump the bower and package version numbers.
`gulp concat` | A task concatenate and compress js files.
`gulp imagemin` | A task to minify images and svg files.
`gulp jshint` | A task detect js errors.
`gulp karma` | A task to run jasmine tests.
`gulp minifyHtml` | A task to inject assets into and compress the main index.html.
`gulp purge` | A task to delete the output directory.
`gulp sass` | A task to compile Sass to CSS.

[license-badge]: http://img.shields.io/badge/license-mit-lightgrey.svg?style=flat
[license-link]: https://github.com/goodeggs/angular-cached-resource/blob/master/LICENSE.md
