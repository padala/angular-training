var weatherController = angular.module('weatherController', []);

weatherController.controller('configCtrl', [ '$scope', 'locationService',
		function($scope, locationService) {
			$scope.gPlace;
			$scope.index = 0;
			$scope.anableCustomerDirective = false;
			$scope.showdiv = function() {
				$scope.anableCustomerDirective = true;
			};

			$scope.location_list = locationService.selected_locations;

			$scope.selected_location = '';
			$scope.temperature=0;
			$scope.temperatureChanged = function(value){
				locationService.set_temperature_unit($scope.temperature);
			}

		} ]);

weatherController.controller('homeCtrl', [
		'$scope',
		'locationService',
		'weatherAPI',
		function($scope, locationService, weatherAPI) {

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
