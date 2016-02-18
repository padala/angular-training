
var angularWeatherApp=angular
    .module('angularWeatherApp', [
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/mainview.html',
                controller: 'mainViewCtrl'
            })
            .when('/weather/:weathercity', {
                templateUrl: 'views/cityview.html',
                controller: 'cityViewCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


    });