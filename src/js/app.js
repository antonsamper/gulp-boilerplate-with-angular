(function (app) {

  function ExampleCtrl() {

    this.use = 'angular single page apps!';

  }

  app.controller('ExampleCtrl', ExampleCtrl);

})(angular.module('app', ['iconButton']));
