(function() {
  'use strict';

  angular
    .module('movieApp', ['ngRoute'])
    .config(config)

    function config($routeProvider, $locationProvider) {
      $routeProvider
      .when('/search/:title', {
        templateUrl: 'app/movie-search/search.html',
        controller: 'SearchController'
      }).when('/show/:id', {
        templateUrl: 'app/show/show.html',
        controller: 'ShowController'
      }).otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      console.log('configured routes')
    }

})();
