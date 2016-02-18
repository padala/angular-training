	
angularWeatherApp.controller('mainViewCtrl',function($scope,cities,$location){
    var options = {
        componentRestrictions: {country: "in"}
    };
    var inputFrom = document.getElementById('textbox');
    var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);
    google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
        var place = autocompleteFrom.getPlace();
        $scope.user.input = place.formatted_address;
    });
	$scope.enteredCities=[];
    $scope.addCity=function(){
        var place = autocompleteFrom.getPlace();
        cities.push(place.address_components[0].short_name);
        $scope.enteredCities=cities
    }
    $scope.remove = function(item) {
        var index = $scope.enteredCities.indexOf(item);
        $scope.enteredCities.splice(index, 1);
    }

});

