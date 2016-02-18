weatherController.directive('googleplace',['$http','locationService',function($http,locationService) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
			
           /* google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                    locationService.add_location(element.val());
                });
            })*/
            
           
        }
                 
    }
}])

weatherController.directive('updatetoday',['$http','locationService',function($http,locationService) {
    return {
    	 require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
        	elm.bind('blur', function() {
                scope.$apply(function() {
                  ctrl.$setViewValue(elm.html());
                });
              });

              // model -> view
              ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
              };

              // load init value from DOM
              ctrl.$setViewValue(elm.html());
        	/*
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
			
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                    locationService.add_location(element.val());
                });
            })
        */}
                 
    }
}])