'use strict';
angular.module('myApp')
  .service('weatherApiService', ['$http', function ($http) {
      var loc = [];

      this.getWeatherDetails = function (cityName) {
          var urlBase = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&mode=json&units=metric&appid=44db6a862fba0b067b1930da0d769e98';
          return $http.get(urlBase);
      };

      this.addCity = function (city) {
          //console.log(city);
          loc.push(city);
          return loc;
      };
      this.getCity = function () {
          return loc;
      };
      this.removeCity = function (obj,id) {
          angular.forEach(loc,function(val,key){
              if(val.id == obj.id){
                  loc.splice(key,1);
              }
              return loc;
          })
      }
  }]);