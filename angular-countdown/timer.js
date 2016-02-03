	(function() {

		var app = angular.module("count",[]);

		var MainController = function($scope) {

			$scope.start = function(enddate,elements,callback) {

			var _second = 1000;
			var _minute = _second*60;
			var _hour = _minute*60;
			var _day = _hour*24;

			end = new Date(enddate);

			console.log(end);

			console.log(end.getTime());

			/*end.setHours(end.getHours() - 5);

			end.setMinutes(end.getMinutes() - 30);*/

			var timer ;

			calculate = function() {
		     
		     var now = new Date();
		      remaining = end.getTime() - now.getTime();

		      

		   /*   console.log(now.getTime);*/

		      var data;

		      if(isNaN(end)) {
		       console.log('Invalid date/time')
		       return;
		    }

		   /* console.log(remaining);*/

		    if(remaining <= 0) {
		    	//clear out timer
		    	//callback
		    	clearInterval(timer);

		    	if(typeof callback === 'function') {
		    		callback();
		    	}
		    }

		    else {
		    	if(!timer) {
		    		timer = setInterval(calculate, _second);
		    	}

		    	data = 
		    	{
		    	'days': Math.floor(remaining / _day),
		    	'hours': Math.floor((remaining % _day) / _hour),
		    	'minutes': Math.floor((remaining % _hour) / _minute),
		    	'seconds': Math.floor((remaining % _minute) / _second)
		        }
		    //console.log(data);

		    if(elements.length) {
		    	for( x in elements)
		    	{
		    		var x = elements[x];
		    		data[x] = ('00' + data[x]).slice(-2);
		    		document.getElementById(x).innerHTML = data[x];
		    	}
		    }

		    }
		    
			};

			calculate();
	}
		}
		app.controller("MainController",["$scope",MainController]);
	}());