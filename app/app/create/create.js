'use strict';

angular.module('myApp.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'create/create.html',
    controller: 'CreateController'
  });
}])

.controller('CreateController', ['$scope', '$window', 'Api', function($scope, $window, Api) {
  $scope.name = ''
  $scope.save = function () {
    Api.save({name: $scope.name})
        .then(function() {
          $window.location.href = '/';
        })
  }
}]);
