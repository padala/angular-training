/*
angular.module("myApp")
.service('myService', function( $http) {
  
  this.data = function(){
	  return $http({
		method : "GET",
		url : "data.json"
	  }).then(function mySuccess(response) {
          console.log(response);
		   return response.data;
		}, function myError(response) {
		 
	  });
      return this.data;
  };
  
});*/
