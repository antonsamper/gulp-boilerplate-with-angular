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

  },

  compileController: function (controllerName, dependencies) {

    var scope;
    var controllerAs = controllerName.split(' ')[2];

    inject(function (_$rootScope_, _$controller_) {

      var defaultScope = _$rootScope_.$new();
      var extendedDeps = angular.extend({$scope: defaultScope}, dependencies);

      scope = extendedDeps.$scope;

      _$controller_(controllerName, extendedDeps);

    });

    return scope[controllerAs];
  }

};
