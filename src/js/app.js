/*
 * @title app
 * @description Module definition for the app
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function (app) {

  function ExampleCtrl() {
    this.use = 'AngularJS SPAs!';
  }

  angularUtilities
    .initComponent('app', ['iconButton', 'githubStats'])
    .controller('ExampleCtrl', ExampleCtrl);

})();
