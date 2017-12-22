angular.module('app').config(appConfigRoute);

appConfigRoute.$inject = ['$locationProvider', '$routeProvider'];

function appConfigRoute($locationProvider, $routeProvider) {

    $routeProvider

    .when('/security', {
        templateUrl: 'app/security/security.html',
        controller: 'SecurityController',
        css:'app/security/security.css',
        controllerAs: 'vm'
    })

    .otherwise('/security');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}
