
var angularWeatherApp=angular
    .module('angularWeatherApp', [
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/view1.html',
                controller: 'MainCtrl'
            })
            .when('/weather/:weathercity', {
                templateUrl: 'views/view2.html',
                controller: 'weatherCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        //$locationProvider.html5Mode(true);
    });