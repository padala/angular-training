

		angular.module("sample",[]);

		angular.module("sample").controller('SampleController' ,function($scope,myFactory) {
        
var obj1 = {
   name : 'Ethan hunt2',
            occupation : 'Spy',
            email : 'ethanhunt@spy.com',
            link1 : 'spyhunter@reddif',
            link2 : 'spy2Go',
            link3 : 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'
}

var obj2 = {
   name : 'Ethan hunt3',
            occupation : 'Spy',
            email : 'ethanhunt@spy.com',
            link1 : 'spyhunter@reddif',
            link2 : 'spy2Go',
            link3 : 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'
}


        $scope.bag = [ 
                obj1,
                obj2 
                 ];
        /*$scope.main = {
         List : []
      };*/
        

         $scope.model = {
         	name : 'Ethan hunt',
         	occupation : 'Spy',
         	email : 'ethanhunt@spy.com',
            link1 : 'spyhunter@reddif',
            link2 : 'spy2Go',
            link3 : 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'
         };
         

		});
		
	angular.module('sample').factory('myFactory',function() {
 var List = [];
   return {
      addUser : function(cand) {
         List.push(cand);
         console.log(List[0].name);
      },
      userList : function() {
         return List;
      }
   };
   
   });

   angular.module('sample').directive('userInfoCard',function() {
   return {
      template : " Users <table><tr><th>Name</th><th>Email</th><th>Occupation</th><th>Action</th></tr><div ng-repeat='user in  bag'><tr><td>{{ user.name }}</td><td>{{ user.email }}</td><td>{{ user.occupation }}</td><td>{{ }}</td></tr></div></table>",
      restrict :'E'
         
      }
   });

   angular.module('sample').directive('bussCard',function() {
      return {
         templateUrl : "bussCard.html",
         restrict : 'E',
         controller : function($scope) {
            $scope.saveMe = function(cand) {
            console.log(cand);
            cand.status = 'saved';
            $scope.bag.push(cand);
            console.log($scope.bag[0]);
            console.log($scope.bag[2]);

         }
         }
      }
   });
