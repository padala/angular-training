(function() {

	var app = angular.module("Sample");

	var MainController = function($scope, $http) {

		var onUserComplete = function(response)
		{
			$scope.obj=response.data;
		};

		var onError = function(reason)
		{
			$scope.error = "couldn't not fetech data .";
		};
        
        $scope.search = function(cityname){

		$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityname+"&mode=json&units=metric&cnt=6&appid=44db6a862fba0b067b1930da0d769e98")
		.then(onUserComplete,onError);
	};

	var List = [];


    
	$scope.add = function(name) {
		List.push(name);
		console.log(List);
	}
	   
     $scope.cityList = List;
	};

	app.controller("MainController",MainController);
}());