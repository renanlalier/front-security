/**
 * @author: Renan Lalier
 * @since: 22/12/2017
 */
(function() {
    'use strict';
    angular.module('app').controller('SecurityController', SecurityController);

    SecurityController.$inject = ['apiService'];

    function SecurityController(apiService) {

        var vm = this;
        vm.validate = validate;

        vm.message = "AVALIADOR DE SEGURANÇA DE SENHA";

        function init() {
            vm.result = { score: 0, complexity: 'Muito curta' };
        }

        function validate() {
            if (vm.password) {
                apiService.validatePassword(vm.password).then(function(response) {
                    vm.result = response.data
                }, function(error) {
                    console.error('Error validate password');
                });
            } else {
                init();
            }

        }
        
        init();
    }

})();