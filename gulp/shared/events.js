/*
 * @title Events
 * @description An object containing shared application events
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gutil = require('gulp-util');


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

module.exports = {
  onError: function (err) {
    gutil.log(gutil.colors.red(err.plugin) + ': ' + gutil.colors.yellow(err.message));
    gutil.beep();
    this.emit('end');
  }
};
