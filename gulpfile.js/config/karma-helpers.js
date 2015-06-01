/*
 * @title Karma helpers
 * @description Helper functions for Karma unit tests
 */


/*********************************************************************************
 1. HELPERS
 *********************************************************************************/

var angularHelpers = {

  compileDirective: function (element, optionalCustomScope) {

    var compiledElement;

    inject(function ($rootScope, $compile) {

      var scope = optionalCustomScope || $rootScope;

      compiledElement = $compile(angular.element(element))(scope);

      scope.$digest();

    });

    return compiledElement;

  }

};
