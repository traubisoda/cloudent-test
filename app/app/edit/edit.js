'use strict';

angular.module('myApp.edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit/:id', {
    templateUrl: 'edit/edit.html',
    controller: 'EditController'
  });
}])

.controller('EditController', ['$scope', '$route', 'Api', function($scope, $route, Api) {
  var countryId = $route.current.params.id
  $scope.name = ''
  $scope.newCityName = ''
  $scope.editingCityIds = []

  Api.get(countryId).then(function(response) {
    var country = response.data.data
    $scope.country = country
    $scope.name = country.name
  })

  $scope.save = function () {
    Api.update(countryId, {name: $scope.name}).then(function(response) {
      $scope.country = response.data.data
    })
  }

  $scope.newCity = function () {
    Api.addCity({countryId, name: $scope.newCityName})
        .then(function (response) {
          $scope.country.cities.push(response.data.data)
          $scope.newCityName = ''
        })
  }

  $scope.editCity = function (id, name) {
    Api.updateCity(id, {name})
        .then(function (response) {
          var idx = $scope.country.cities.findIndex(function (item) {
            return item.id == id
          })
          $scope.country.cities[idx] = response.data.data
        })
  }

  $scope.deleteCity = function (id) {
    Api.deleteCity(id)
        .then(function() {
            $scope.country.cities = $scope.country.cities.filter(function (item) {
              return item.id !== id;
            })
        })
  }
}]);
