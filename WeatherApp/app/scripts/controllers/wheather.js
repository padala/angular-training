'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('wheatherCtrl', function ($scope,weatherApiService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getLocationArray=weatherApiService.getCity();
    $scope.getTemparature=function(obj){
        var city=$scope.selectedLocation;
        weatherApiService.getWeatherDetails(city);
        var response=weatherApiService.getWeatherDetails(city);
        response.then(function(response) {
            $scope.users = response.data.list;

debugger;
        });


    }
  });
