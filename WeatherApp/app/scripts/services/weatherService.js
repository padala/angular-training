angular.module('weatherAppApp').service('weatherApiService', ['$http', function ($http) {
    var loc = [];

    this.getWeatherDetails = function (cityName) {

        http://api.openweathermap.org/data/2.5/forecast/daily?q=%27hyderabad%27&mode=json&units=metric&appid=a607a9ba3338f6e11f392a9605096305
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
    this.removeCity = function (id) {
        loc.splice(id, 1);
        return loc;
    }

}]);