/*
 * @title iconButton
 * @description Module definition for the iconButton directive
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function (app) {

  function iconButton() {

    return {
      restrict: 'E',
      template: '<a href="{{href}}" class="btn btn--shroom-haze btn--medium"><span class="icon icon--{{icon}}" aria-hidden="true"></span><span><ng-transclude></ng-transclude></span></a>',
      transclude: true,
      scope:  {
        href: '@',
        icon: '@'
      }
    };

  }

  app.directive('iconButton', iconButton);

})(angular.module('iconButton', []));
