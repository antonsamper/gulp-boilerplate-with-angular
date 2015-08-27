/*
 * @title iconButton
 * @description Module definition for the iconButton component
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function () {

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

  angularUtilities
    .initComponent('iconButton', ['githubStats'])
    .directive('iconButton', IconButtonDirective);

})();
