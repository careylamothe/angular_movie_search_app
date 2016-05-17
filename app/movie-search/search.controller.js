(function() {
'use strict';

angular
  .module('movieApp')
  .controller('SearchController', SearchController)

  function SearchController($http, $scope, $routeParams, $location) {
    console.log('search controlled')
    $scope.vm = {}
    $scope.vm.title = $routeParams.title

    $scope.vm.searchTitle = function() {
      $location.path('/search/' + $scope.vm.title)
    }

      $http.get('http://www.omdbapi.com/?s=' + $routeParams.title + '&y=&plot=short&r=json')
      .then(function(result) {
        console.log(result)
        $scope.vm.movies = result.data.Search
      });
  }

})();
