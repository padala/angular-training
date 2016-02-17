
angularWeatherApp.controller('weatherCtrl',function($scope,cities,$routeParams,$http,$location ){
$scope.mycity=$routeParams.weathercity;
    $scope.citiesC=cities;

   var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.mycity+'&mode=json&units=metric&appid=44db6a862fba0b067b1930da0d769e98'

    $scope.weatherdetails;
    var list=$http.get(apiUrl).success(function(data, status, headers, config) {
        $scope.weatherdetails=data;
    });
    $scope.cityChange = function(citiesC){
        $location.path('/weather/'+citiesC);
    }
    $scope.tempChange1 = function(){
        var list=$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.mycity+'&mode=json&units=imperial&appid=44db6a862fba0b067b1930da0d769e98')
            .success(function(data, status, headers, config) {
            $scope.weatherdetails=data;
        });
    }
    $scope.tempChange = function(){
        var list=$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.mycity+'&mode=json&units=metric&appid=44db6a862fba0b067b1930da0d769e98')
            .success(function(data, status, headers, config) {
                $scope.weatherdetails=data;
            });
    }
});


