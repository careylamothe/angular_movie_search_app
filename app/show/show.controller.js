(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('ShowController', ShowController)

    function ShowController($scope, $http, $routeParams) {
      $scope.vm = {}
      $scope.vm.id = $routeParams.id

        $http.get('http://www.omdbapi.com/?i=' + $routeParams.id + '&plot=short&r=json')
        .then(function(result) {
          console.log(result)
          $scope.vm.movie = result.data
        })
    }
})();
