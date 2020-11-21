'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', 'Api', function($scope, Api) {
  var fetchCountries = function () {
    Api.list().then(function(response) {
      $scope.countries = response.data.data
    })
  }

  $scope.countries = []
  $scope.delete = function(id) {
    Api.delete(id).then(fetchCountries)
  }

  fetchCountries()
}]);
