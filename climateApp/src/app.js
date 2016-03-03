angular.module('myApp',['ui.router'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url:'/home',
        template:'hi this is me'
      })
      .state('main',{
        url:'/main',
        templateUrl:'views/main.html',
        controller : 'mainCtrl'
      })
      .state('weatherData',{
        url : '/weatherData',
        templateUrl : 'views/weatherData.html',
        controller : 'weatherCtrl'
      });

    $urlRouterProvider.otherwise('/main')
  });