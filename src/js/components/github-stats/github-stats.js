/*
 * @title githubStats
 * @description Module definition for the githubStats component
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function () {

  function GithubStatsDirective() {

    return {
      restrict: 'E',
      templateUrl: function (element, attributes) {
        return '/js/components/github-stats/github-stats-' + attributes.info + '.html';
      },
      controller: GithubStatsController,
      controllerAs: 'gs',
      bindToController: true,
      scope: {
        user: '@',
        repo: '@',
        info: '@'
      }
    };

  }

  function GithubStatsController(GithubStatsService) {

    var controller = this;

    GithubStatsService
      .get({
        user: this.user,
        repo: this.repo,
        info: this.info
      }, function(response) {
        controller[controller.info] = response;
    });

  }

  function GithubStatsService($resource) {

    return $resource('https://api.github.com/repos/:user/:repo/stats/:info', {
      user: '@user',
      repo: '@repo',
      info: '@info'
    }, {
      get: {
        method: 'GET',
        isArray: true,
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    });

  }

  angularUtilities
    .initComponent('githubStats', ['ngResource'])
    .directive('githubStats', GithubStatsDirective)
    .factory('GithubStatsService', GithubStatsService);

})();
