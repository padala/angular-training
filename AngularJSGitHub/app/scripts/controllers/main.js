'use strict';

/**
 * @ngdoc function
 * @name angularJsgitHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsgitHubApp
 */
angular.module('angularJsgitHubApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.user = {
            fullname: 'Shiva Sajjan',
            occupation: 'Software Engineer',
            email: 'shivasajjan12@gmail.com',
            link1: 'www.getbootstrap.com',
            link2: 'http://www.sitepoint.com/',
            logo: 'http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png'

        };
  });
'use strict';



