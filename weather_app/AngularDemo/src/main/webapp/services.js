weatherController.service('locationService', function(){
	this.selected_locations = [];
	this.temperature = 0;
	
	this.add_location = function(location){
		this.selected_locations.push(location);
		return this.selected_locations;
	}
	
	this.get_locations = function(){
		return this.selected_locations;
	}
	
	this.set_temperature_unit = function(temperature_units){
		this.temperature = temperature_units;
	}
	
	this.get_temperature_unit = function(){
		return this.temperature;
	}
	this.update_locations = function(location_array){
		this.selected_locations = location_array;
	}
});

weatherController.factory('weatherAPI', ['$http','$q', function($http,$q){
	
	var current_tempatures = [];
	var current_temp=[];
	
	
	
	return{
		get_current_temperatures : function(locations){
			for(var i=0;i<locations.length;i++)
				this.get_current_temperature(location[i]);
			return current_tempatures;
		},
		
		get_week_temperatures : function(locations){
			for(var i=0;i<locations.length;i++)
				this.get_week_temperature(locations[i]);
			return current_tempatures;
		},
		
		
		get_week_temperature : function(location,temperature){
			//temperature = temperature==0?'Metric':'Imperial';temperature = 
			
			//temperature = temperature || 'Metric';
			temperature = temperature==0?'metric':'imperial';
			
			var forecast_url="http://api.openweathermap.org/data/2.5/forecast/daily?q="+window.encodeURIComponent(location)+"&mode=json&units="+temperature+"&cnt=7&APPID=2d5f31761f7c7f557cf3bff80ba98045";
			
			return $http({
				  method: 'GET',
				  url: forecast_url
				}).then(function successCallback(response) {
					//current_tempatures.push(response.data);
					return response.data.list;
				  }, function errorCallback(response) {
					  return $q.reject(response.data);
				  }); 
			
		},
	get_current_temperature : function(location,temperature){
		//temperature = temperature || 'Metric';
		temperature = temperature==0?'metric':'imperial';
		var url="http://api.openweathermap.org/data/2.5/weather?q="+window.encodeURIComponent(location)+"&units="+temperature+"&appid=44db6a862fba0b067b1930da0d769e98";
		
		return $http({
			  method: 'GET',
			  url: url
			}).then(function(response) {
				current_temp.push(response.data);
				return response.data;
			}, function errorCallback(response) {
				 return $q.reject(response.data);
			  }); 
		
	
	}
	
	
}
	
}]);
