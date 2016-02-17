(function() {

	var app = angular.module("Sample");

	var MainController = function($scope,weatherservice,$location) {

    $scope.add = function(cityname) {
		weatherservice.addCity(cityname);
	}
	   
     $scope.cityList = weatherservice.getList();
      
      $scope.next = function() {
         $location.path("/city");
      }

	};

	app.controller("MainController",MainController);
}());