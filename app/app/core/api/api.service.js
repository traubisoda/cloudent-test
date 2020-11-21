angular.
module('core.api').
factory('Api', ['$http',
    function($http) {
        return {
            list() {
                return $http.get('http://localhost:8080/api/countries')
            },
            get(id) {
                return $http.get('http://localhost:8080/api/countries/' + id)
            },
            save(data) {
                return $http.post('http://localhost:8080/api/countries', data)
            },
            update(id, data) {
                return $http.put('http://localhost:8080/api/countries/' + id, data)
            },
            delete(id) {
                return $http.delete('http://localhost:8080/api/countries/' + id)
            },
            addCity(data) {
                return $http.post('http://localhost:8080/api/cities', data)
            },
            updateCity(id, data) {
                return $http.put('http://localhost:8080/api/cities/' + id, data)
            },
            deleteCity(id) {
                return $http.delete('http://localhost:8080/api/cities/' + id)
            }
        }
    }
]);
