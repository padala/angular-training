'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
    .controller('MainCtrl', function ($scope, $location, weatherApiService) {
        $scope.cities = [
            {'name': 'Hyderabad'},
            {'name': 'Bangalore'}
        ];
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.locations = [];
        $scope.submitCity = function (city) {
            console.log("add this", city);
            $scope.locations = weatherApiService.addCity(city);
        };
        $scope.removeCity = function (id) {
            weatherApiService.removeCity(id);
        };
        $scope.go = function (path) {
            $location.path(path);
        };
    });
