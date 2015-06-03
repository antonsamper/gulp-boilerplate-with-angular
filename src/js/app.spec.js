/*
 * @title app
 * @description Tests for the main app module
 */


/*********************************************************************************
 1. TESTS
 *********************************************************************************/

describe('The main app module...', function () {

  describe('ExampleCtrl...', function () {

    var compiledController;

    beforeEach(function () {

      module('app');

      compiledController = angularHelpers.compileController('ExampleCtrl as ctrl');

    });

    it('should contain the `use` property', function () {
      expect(compiledController.use).toBeDefined();
    });

  });

});

