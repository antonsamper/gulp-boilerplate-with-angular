/*
 * @title iconButton
 * @description Module definition for the iconButton component
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function (app) {

  var moduleName = 'iconButton';

  try {
    app = angular.module(moduleName);
  } catch (e) {
    app = angular.module(moduleName, []);
  }

  function IconButtonDirective() {

    return {
      restrict: 'E',
      templateUrl: '/js/components/icon-button/icon-button.html',
      transclude: true,
      scope:  {
        href: '@',
        icon: '@'
      }
    };

  }

  app.directive('iconButton', IconButtonDirective);

})();
