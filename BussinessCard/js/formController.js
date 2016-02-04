'use strict';

angular.module('mainApp')
    .controller('formController',function($scope){
        $scope.user = {
            fullname : 'tanay pant',
            occupation: 'White Hat',
            email: 'tanay123@gmail.com',
            link1: 'http://www.cyberwizards.org',
            link2: 'http://www.cyberwizards.org',
            logo : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/logo.png'
        };
    });
