angular.module("myApp", [])
    .controller('cardCtrl', function($scope, $http) {

        function loadData(){
            $http.get("data.json").then(function(response) {
                $scope.users = response.data;
                $scope.currentUser = angular.copy($scope.users[0]);
            });
        }
        loadData();


        $scope.saveDataInTable = function(currentUser) {
            formSumbmitValue = angular.copy(currentUser);

            var replaced = false;
            angular.forEach($scope.users, function(val, key) {
                if (val.id == formSumbmitValue.id) {
                    $scope.users.splice(key, 1,formSumbmitValue);
                    replaced = true;
                }
            });

            if(!replaced){
                if(!formSumbmitValue.id){
                    formSumbmitValue.id = (new Date()).getTime();
                }
            $scope.users.push(formSumbmitValue);
            }
        };

        $scope.editItem = function(currentUser) {
            $scope.currentUser = angular.copy(currentUser);
        };

        $scope.deleteFromList = function(currentUser) {
            angular.forEach($scope.users, function(val, key) {
                if (val.id == currentUser.id) {
                    $scope.users.splice(key, 1);
                }
            })
        };

        $scope.loadInCard = function(currentUser) {
            $scope.currentUser = angular.copy(currentUser);

        };


    });