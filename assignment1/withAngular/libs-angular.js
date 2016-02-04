angular.module('timer_countdown', [])
    .controller('timer_controller', ['$scope', '$interval', function($scope, $interval) {
        $scope.days = 0;
        $scope.date;
        $scope.changing_time;
        $scope.current_time;
        $scope.given_timer;
        $scope.month = 0;
        $scope.hours = 0;
        $scope.minutes = 0;
        $scope.seconds = 0;
        $scope.interval_callback;

        /**
        This function sets up the value of hours, minutes and seconds.
        **/
        $scope.add_to_epoch = function() {

            if ($scope.given_timer == "")
                return;

            var hours = $scope.given_timer.getHours();
            var minutes = $scope.given_timer.getMinutes()
            var seconds = $scope.given_timer.getSeconds()

            $scope.hours += (hours);
            $scope.minutes += (minutes);
            $scope.seconds += (seconds);

            $scope.changing_time += (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
        };

        /**
        Event triggered on change of time or date
        **/
        $scope.changed_timer = function(type) {

        	//interval_callback is the funtion which has the return type of interval. 
        	//Checks if there is any active interval, if so clear it and start a new one
            if (($scope.interval_callback)) 
                $scope.stop_interval();

            var given_date = "";
            if ($scope.given_date)
                given_date = $scope.given_date.getTime();

            if (given_date == "") {
                $scope.current_time = 0;
                $scope.changing_time = 0;
            } else {
                $scope.current_time = (new Date().getTime());
                $scope.changing_time = given_date;
            }

            // Set epoch to the current changing time variable.
            if (type == "time") {
                $scope.add_to_epoch();
            }

            // Doesn't allow old dates or past events
            if ($scope.changing_time - $scope.current_time < 0) {
                alert("select correct date");
                return;
            }

            //timer function which runs every 1000 ms
            $scope.interval_callback = $interval(function() {


                var milliseconds = $scope.changing_time;

                var seconds = milliseconds / 1000;

                var minutes = seconds / 60;

                seconds %= 60;

                var hours = minutes / 60;

                minutes %= 60;

                hours %= 24;

                var current_date = (new Date).getTime();

                var days = 0;
                var month = 0;

                if ($scope.given_date) {
                    days = ($scope.changing_time - current_date) / 86400000;
                    if (days < 0)
                        days = 0;
                    month = days / 28
                }

                $scope.days = parseInt(days);
                $scope.month = parseInt(month);
                $scope.hours = parseInt(hours);
                $scope.minutes = parseInt(minutes);
                $scope.seconds = parseInt(seconds);

                $scope.changing_time -= 1000;

                if ($scope.changing_time < 0) 
                	$scope.stop_interval();

            }, 1000)
        };

        $scope.stop_interval = function(){
        	 $interval.cancel($scope.interval_callback);
             $scope.interval_callback = false;
        }

    }]);