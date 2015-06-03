/*
 * @title app
 * @description Module definition for the app
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function (app) {

  var moduleName = 'app';
  var dependencies = ['iconButton'];

  try {
    app = angular.module(moduleName);
  } catch (e) {
    app = angular.module(moduleName, dependencies);
  }

  function ExampleCtrl() {
    this.use = 'AngularJS SPAs!';
  }

  app.controller('ExampleCtrl', ExampleCtrl);

})();
