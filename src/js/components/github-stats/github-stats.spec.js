/*
 * @title githubStats
 * @description Tests for the githubStats component
 */


/*********************************************************************************
 1. TESTS
 *********************************************************************************/

describe('The githubStats directive...', function () {

  var githubUser;
  var githubRepo;
  var githubInfo;
  var githubResponse;
  var compiledElement;
  var httpBackend;

  beforeEach(function () {

    module('githubStats');

    inject(function (_$httpBackend_) {
      httpBackend = _$httpBackend_;
    });

    githubUser = 'testuser';
    githubRepo = 'testrepo';
    githubInfo = 'contributors';
    githubResponse = [{ author: 'test' }];
    httpBackend.expectGET('https://api.github.com/repos/' + githubUser + '/' + githubRepo + '/stats/' + githubInfo).respond(200, githubResponse);
    compiledElement = angularHelpers.compileDirective('<github-stats user="' + githubUser + '" repo="' + githubRepo + '" info="' + githubInfo + '"></github-stats>');

  });

  it('should correctly map `user`, `repo` and `info` to an isolate scope', function () {

    var scope = compiledElement.isolateScope();

    expect(scope.gs.user).toEqual(githubUser);
    expect(scope.gs.repo).toEqual(githubRepo);
    expect(scope.gs.info).toEqual(githubInfo);

  });

  it('should correctly map `contributor` to an isolate scope via the service on init', function () {

    var scope = compiledElement.isolateScope();

    httpBackend.flush();

    expect(scope.gs[githubInfo].length).toEqual(1);
    expect(scope.gs[githubInfo].author).toEqual(githubResponse.author);

  });

});
