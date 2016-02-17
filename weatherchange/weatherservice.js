(function() {

  var weather = function($http) {
   
  var List = [];

   var getCity = function(cityname) {

        return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityname+"&mode=json&units=metric&cnt=6&appid=44db6a862fba0b067b1930da0d769e98")
                  .then(function(response) {
                  	return response.data;
                  });
   };

   var addCity = function(cityname) {
       List.push(cityname);
   }

   var getList = function() {
   	return List;
   }

  return {
      getCity: getCity,
      addCity: addCity,
      getList: getList
  };

  };

  var app = angular.module("Sample");

  app.factory("weatherservice",weather);

}());