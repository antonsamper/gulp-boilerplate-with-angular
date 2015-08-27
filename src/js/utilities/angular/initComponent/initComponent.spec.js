/*
 * @title initComponent
 * @description Tests for the initComponent component
 */


/*********************************************************************************
 1. TESTS
 *********************************************************************************/

describe('The initComponent utility...', function () {

  var componentName = 'component1';

  it('should create angular component and then...', function () {

    expect(function () {
      angular.module(componentName);
    }).toThrow();

    var component = angularUtilities.initComponent(componentName);

    expect(function () {
      angular.module(componentName);
    }).not.toThrow();

  });

  it('should inject dependencies into the existing component', function () {

    var dependency1Name = 'dependency1';
    var dependency2Name = 'dependency2';

    expect(function () {
      angular.module(componentName);
    }).not.toThrow();

    var component = angularUtilities.initComponent(componentName, [dependency1Name, dependency2Name]);

    expect(component.requires.length).toBe(2);
    expect(angular.module(componentName).requires[0]).toEqual(dependency1Name);
    expect(angular.module(componentName).requires[1]).toEqual(dependency2Name);

  });

});
