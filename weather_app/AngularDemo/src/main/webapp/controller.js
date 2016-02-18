var weatherController = angular.module('weatherController', []);

weatherController.controller('configCtrl', [ '$scope', 'locationService',
		function($scope, locationService) {
			$scope.gPlace;
			$scope.index = 0;
			$scope.anableCustomerDirective = false;
			$scope.showdiv = function() {
				$scope.anableCustomerDirective = true;
			};

			$scope.add_one;
			$scope.add_to_select = function(){
				//console.log(chosenPlace);
				
				$scope.location_list =locationService.add_location($scope.gPlace.gm_accessors_.place.Qd.formattedPrediction);
				
			}
			$scope.location_list = locationService.selected_locations;

			$scope.selected_location = '';
			$scope.temperature=0;
			$scope.temperatureChanged = function(){
				locationService.set_temperature_unit($scope.temperature);
			}
			
			$scope.update_locations=function(){
				console.log($scope.selected_location);
				for(var i=0;i<$scope.selected_location.length;i++){
					var index = $scope.location_list.indexOf($scope.selected_location[i]);
					$scope.location_list.splice(index, 1); 
					
					locationService.update_locations($scope.location_list);
					
										
				}
					
					
			}

		} ]);

weatherController.controller('homeCtrl', ['$rootScope','$location','$route',
		'$scope',
		'locationService',
		'weatherAPI',
		function($rootScope,$location,$route, $scope, locationService, weatherAPI) {
			
	/*$rootScope.$on('$locationChangeStart', function(event) {
	     $state.go('config');
	});*/

			$scope.location_list = locationService.selected_locations;

			$scope.selected_location = $scope.location_list[0];

			$scope.get_today_temp = function(location,temperature) {
				location = location || locationService.selected_locations[0];
				weatherAPI.get_current_temperature(location,temperature).then(
						function(result) {
							// promise was fullfilled (regardless of outcome)
							// checks for information will be peformed here
							$scope.today = result;

						}, function(error) {
							// handle errors here
							console.log(error.statusText);
						}

				)
			};

			$scope.get_week_temp = function(location,temperature) {
				location = location || locationService.selected_locations[0];
				weatherAPI.get_week_temperature(location,temperature).then(
						function(result) {
							// promise was fullfilled (regardless of outcome)
							// checks for information will be peformed here
							$scope.week = result;

						}, function(error) {
							// handle errors here
							console.log(error.statusText);
						}

				)
			};
			
			

			$scope.select_change = function(o) {
				$scope.get_week_temp($scope.selected_location,$scope.temperature);
				$scope.get_today_temp($scope.selected_location,$scope.temperature);
			}

			$scope.temperature = locationService.get_temperature_unit();
		} ]);
