angular.
module('myApp.edit').
component('city', {
    templateUrl: 'edit/city.html',
    controller: ['$scope', 'Api', function CityController($scope, Api) {
        var ctrl = this
        $scope.isEditing = false

        $scope.editCity = function() {
            $scope.isEditing = true
        }

        $scope.cancel = function() {
            $scope.isEditing = false
        }

        $scope.save = function () {
            ctrl.update(ctrl.city.id, ctrl.city.name)
        }
    }],
    bindings: {
        city: '<',
        remove: '=',
        update: '='
    }
});
