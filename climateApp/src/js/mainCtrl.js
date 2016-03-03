'use strict';

angular.module('myApp')
    .controller('mainCtrl',
        function ($scope,$location,weatherApiService){
          $scope.go = function (path) {
            $location.path(path);
          };
          $scope.name = {};
          $scope.cities = [];
          $scope.addcities = function (city) {
            var obj = {name:city,id:(new Date()).getTime()};
            console.log("added", city);
            $scope.cities = weatherApiService.addCity(obj);
          };
          $scope.removeCity = function (obj) {
            weatherApiService.removeCity(obj);
          };
         /* var inputFrom = document.getElementById('textbox');
          var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);
          google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
            var place = autocompleteFrom.getPlace();
            $scope.name.input = place.formatted_address;
          });*/
            /*$scope.name = {};
            $scope.cities = [];
            $scope.addcities = function(city){
                var obj = {name:city,id:(new Date()).getTime()};
                $scope.cities.push(obj);
                console.log($scope.cities);
            };
            $scope.deleteCities=function(obj){
                angular.forEach($scope.cities,function(val,key){
                    if(val.id == obj.id){
                        $scope.cities.splice(key,1);
                    }
                });
            };*/

        });