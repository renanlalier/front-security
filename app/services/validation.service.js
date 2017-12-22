/**
 * @author: Renan Lalier
 * @since: 22/12/2017
 */
(function() {

  angular.module('app').factory('apiService', apiService);

  apiService.$inject = ['$http'];

  function apiService($http) {

    var service = {
      validatePassword: validatePassword
    };

    return service;

    function validatePassword(body){
        return $http({
            url: 'http://localhost:8080/rest/gumga/security',
            method: 'POST',
            data: body
        });
    }

  }
})();
