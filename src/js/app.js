(function (app) {

  function ExampleCtrl() {

    this.use = 'AngularJS SPAs!';

  }

  app.controller('ExampleCtrl', ExampleCtrl);

})(angular.module('app', ['iconButton']));
