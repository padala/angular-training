(function() {

	var app = angular.module("Sample");

	var CityController = function($scope, weatherservice) {

		var onUserComplete = function(data)
		{
			$scope.obj=data;
		};

		var onError = function(reason)
		{
			$scope.error = "couldn't not fetech data .";
		};
        
        $scope.search = function(cityname){

		weatherservice.getCity(cityname).then(onUserComplete,onError);
	};

     $scope.cityList = weatherservice.getList();
	};

	app.controller("CityController",CityController);
}());