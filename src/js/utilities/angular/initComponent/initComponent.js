/*
 * @title initModule
 * @description Module definition for the AngularJS initModule utility
 * which checks to see if a module is defined and if not, it creates it.
 */


/*********************************************************************************
 1. UTILITY DEFINITION
 *********************************************************************************/

var angularUtilities = angularUtilities || {};

angularUtilities.initComponent = function initComponent(componentName, componentDependencies) {

  var component;
  var dependencies = componentDependencies || [];
  var injectDependencies = function injectDependencies(dependency) {
    component.requires.push(dependency);
    //console.log('%c(di) Injecting `' + dependency + '` into `' + componentName + '`', commonUtilities.log.colors.yellow);
  };

  /*
   * Determine if component exists or if we need to create it
   */
  try {
    component = angular.module(componentName);
  } catch (e) {
    component = angular.module(componentName, []);
    //console.log('%c(component) Registering `' + componentName + '`', commonUtilities.log.colors.orange);
  }

  /*
   * Inject dependencies into module
   */
  dependencies.forEach(injectDependencies);

  return component;

};
