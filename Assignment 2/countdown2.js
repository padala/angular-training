var app = angular.module('myApp',[]);
    app.controller("countdowncontroller",function($scope,$interval){
	 var days,hours,minutes,sec,timer;
      $scope.Time = {
    	days:00,
    	hours:00,
	    minutes:00,
	    seconds:00
};
$scope.inputChange =function(){
end = new Date($scope.dateInput);
        
        end = end.getTime(); 
        if (isNaN(end)) {
          $window.alert("Invalid Date Format");
		   return;
}
console.log(end);
 timer = $interval($scope.calculate,1000);
}
$scope.calculate = function(){
         var current = new Date();
		 
         var remaining = parseInt((end - current.getTime())/1000);
		 //console.log(remaining);
          
            if (remaining <= 0){
                $interval.cancel(timer);
                days=00;
                hours=00;
                minutes=00;
                sec=00;
                $scope.display(days,hours,minutes,sec);
                if (typeof $scope.callback === 'function' ) {
                    $scope.callback();
					//console.log("terminated")
                }
                
            }else{
                
                days = parseInt(remaining/86400);
                remaining = (remaining%86400);
                hours = parseInt(remaining/3600);
                remaining = (remaining%3600);
                minutes = parseInt(remaining/60);
                remaining = (remaining%60);
                sec = parseInt(remaining);
                $scope.display(days,hours,minutes,sec);
                //console.log("entered display");
            }
  };
  
  $scope.display = function(days,hours,minutes,sec) {
            var dl = days.toString().length;
            if (dl == "1") {
                sl = 2;
            }else{
                if (isNaN(dl)) {
                    sl = 3;
                }
                sl = dl;
            }
			
			$scope.Time.days =("00"+days).slice(-sl);
            $scope.Time.hours = ("0"+hours).slice(-2);
            $scope.Time.minutes = ("0"+minutes).slice(-2);
            $scope.Time.seconds = ("0"+sec).slice(-2);
			//console.log($scope.Time,"time");
			
}

$scope.callback=function(){
       $window.alert("Time Out"); 
	   }
	});