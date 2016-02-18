
angularWeatherApp.controller('cityViewCtrl',function($scope,cities,$routeParams,$http,$location){
$scope.mycity=$routeParams.weathercity;
    $scope.cities=cities;
    $scope.newCity = '';
    $scope.unitMeasure='°C';
   var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.mycity+'&mode=json&units=metric&appid=44db6a862fba0b067b1930da0d769e98'
    $scope.weatherdetails;
    var list=$http.get(apiUrl).success(function(data, status, headers, config) {
        $scope.weatherdetails=data;
    });
    $scope.getCity = function(city){
        $location.path('/weather/'+city);
    };
    $scope.changetemp=function(value){
        if(value=='far'){
            $scope.unitMeasure='°F';
            var units='imperial';
        }
        else
        {
            units="metric";
            $scope.unitMeasure='°C';
        }
        var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.mycity+'&mode=json&units='+units+'&appid=44db6a862fba0b067b1930da0d769e98'
        $scope.weatherdetails;

        var list=$http.get(apiUrl).success(function(data, status, headers, config) {
            $scope.weatherdetails=data;

        });
    }
});






