(function() {
	
  var app = angular.module("Sample",["ngRoute"]);

  app.config(function($routeProvider) {
     
     $routeProvider
         .when("/main",{
         	templateUrl: "main.html",
         	controller: "MainController"
         })
         .when("/city",{
         	templateUrl: "city.html",
         	controller: "CityController"
         })
         .otherwise({redirectTo: "/main"});
  });

}());