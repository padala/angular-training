'use strict';

var cApp=angular.module('climateApp.dataCtrl', ['ngRoute']);

cApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

cApp.controller('DataCtrl', [function() {

}]);