/*
 * @title Gulpfile.js
 * @description A directory file loader to include all the gulp tasks
 */


/*********************************************************************************
 1. LOADER
 *********************************************************************************/

require('require-dir')('tasks', { recurse: true });
