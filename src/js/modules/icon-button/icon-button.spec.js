/*
 * @title iconButton
 * @description Tests for the iconButton directive
 */


/*********************************************************************************
 1. TESTS
 *********************************************************************************/

describe('The iconButton directive...', function () {

  var buttonHref;
  var buttonIcon;
  var buttonText;
  var compiledElement;

  beforeEach(function () {

    module('iconButton');

    buttonHref = 'http://test.com';
    buttonIcon = 'testicon';
    buttonText = 'Test button';
    compiledElement = angularHelpers.compileDirective('<icon-button href="' + buttonHref + '" icon="' + buttonIcon + '">' + buttonText + '</icon-button>');

  });

  it('should correctly map `href` and `icon` to an isolate scope', function () {
    var scope = compiledElement.isolateScope();
    expect(scope.href).toEqual(buttonHref);
    expect(scope.icon).toEqual(buttonIcon);
  });

  it('should transclude the correct button text', function () {
    expect(compiledElement.html()).toContain(buttonText);
  });

});
