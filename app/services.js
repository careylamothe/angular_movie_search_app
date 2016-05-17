(function() {
  'use strict';

  angular
  .module('movieApp')
  .factory('SearchService', MovieService)
  .factory('ShowService', ShowService)

  function SearchService($scope, $http, $routeParams) {
    $scope.view = {}
    $scope.view.title = $routeParams.title;
    $scope.view.list = []


    return {
      getList: function() {
        return list
      }
    }
  }

  function ShowService($scope, $http, $routeParams) {
    $scope.view = {};
    $scope.view.id = $routeParams.id;
    $scope.view.movie = {}

    $http.get('')


  }

})
