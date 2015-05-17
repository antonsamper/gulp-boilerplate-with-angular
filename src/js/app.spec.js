//sample test
describe('Controller: Example', function () {

  beforeEach(module('app'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('ExampleCtrl as ctrl', {$scope: $scope});
  }));

  it('should contain `use` property', function () {
    var use = $scope.ctrl.use;
    expect(use).toBeDefined();
    expect(use).toEqual('angular single page apps!');
  });

});
