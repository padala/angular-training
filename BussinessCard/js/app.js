'use strict';

var app = angular.module('mainApp',['ui.router'])
    .config(function($stateProvider,$locationProvider,$urlRouterProvider){
        $stateProvider
            .state('index',{
                url:'/index',
                templateUrl:'index.html'
            })
            .state('home',{
                url:'/home',
                templateUrl:'template/home.html'
            });
        $urlRouterProvider.otherwise('index');
    });
