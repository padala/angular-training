var weatherApp = angular.module('weatherApp', [
  'ngRoute',
  'weatherController'
]);

weatherApp.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                        when('/config', {
                          templateUrl: 'main_view.html',
                          controller: 'configCtrl'
                        }).
                        when('/home', {
                          templateUrl: 'weather-template.html',
                          controller: 'homeCtrl',
                          reloadOnSearch : true
                        }).
                        otherwise({
                          redirectTo: '/config'
                        });
                    }]);