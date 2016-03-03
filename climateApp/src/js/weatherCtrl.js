'use strict';


angular.module('myApp')
  .controller('weatherCtrl',
    function ($scope,$location,weatherApiService){


      $scope.weatherDetails = weatherApiService.getCity();
debugger;      $scope.getTemparature=function(obj) {
        var city = $scope.selectedLocation;
        weatherApiService.getWeatherDetails(city);
        var response = weatherApiService.getWeatherDetails(city);
        response.then(function (response) {
          $scope.users = response.data.list;
          console.log($scope.users);
        })
      };
    });

/*
 angular.module('myApp')
 .controller('weatherCtrl','weatherApiService',
 function($scope, weatherApiService){
 $scope.weatherDetails = weatherApiService.getWeatherDetails();
 $scope.week = $scope.weatherDetails.data.list;
 $scope.getLocationArray = weatherApiService.getCity();
 $scope.getTemparature = function(obj){
 var city = $scope.selectedLocation;
 weatherApiService.getWeatherDetails(city);
 response.then(function(response) {
 $scope.users = response.data.list;
 });
 }
 });*/
