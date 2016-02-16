

// Declare app level module which depends on views, and components
//var app=angular.module('climateApp', ['ngRoute','ngCookies']);
var app=angular.module('climateApp', ['ngRoute']);
//$http,$cookies
//['$cookies',,operations

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/#/cities', {
        templateUrl: 'view2/view2.html',
        controller: 'dataCtrl'
    }).when('/cities/:name', {
        templateUrl: 'view1/view1.html',
        controller: 'dataCtrl'
    }).
    otherwise({
        redirectTo: '/cities'
    });
}]);
//app.controller('cityCtrl','$scope','$cookies','$cookieStore','$window',function($scope,$cookies,$cookieStore,$window){
//app.controller('cityCtrl',function($scope){
app.controller('cityCtrl',function($scope){
    $scope.name;
  $scope.cityNames=['Hyderabad','Nagpur','Delhi'];

 $scope.addCities=function(city){
   console.log(city);
   $scope.cityNames.push(city);
   //  $cookieStore.put('CityName', $scope.cityNames);
   console.log($scope.cityNames);
  };

  $scope.deleteCities=function(city){
    var srno=getSrNo(city);
    $scope.cityNames.splice(srno,1);
  };

    /*$scope.init = function () {
        $scope.cityNames=$cookieStore.get('CityName');
    }*/
  getSrNo=function(cityName){
    for(var i=0;i<$scope.cityNames.length;i++)
      if($scope.cityNames[i]==cityName)
        return i;
  };

});


app.controller('dataCtrl',function($scope,$routeParams,$http){

    var name=$routeParams.name;
    var link="http://api.openweathermap.org/data/2.5/forecast/daily?q="+name+"&mode=json&units=metric&cnt=7&appid=44db6a862fba0b067b1930da0d769e98";
    $http.get(link)
        .then(function(response) {
            $scope.data = response.data;
            for (var i=0;i<$scope.data.list.length;i++)
            {
                var x=new Date($scope.data.list[i].dt*1000);
                console.log(x);
                var dateToStr = x.toUTCString().split(' ');
                var cleanDate = dateToStr[2] + ' ' + dateToStr[1]+','+ dateToStr[0] ;
                $scope.data.list[i].dt=angular.copy(cleanDate);

            }
            console.log($scope.data);

});
});
/*
app.service('operations',function($scope){
  this.addCity=function(cityName){
    $scope.cityNames.push(cityName);
  };

  this.deleteCity=function(cityName){
  var srno=getSrNo(cityName);
    $scope.cityNames.splice(srno,1);
  };

  getSrNo=function(cityName){
    for(var i=0;i<$scope.cityNames.length;i++)
      if($scope.cityNames[i]==cityName)
        return i;
  };
});
*/

/*
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}


]*/
