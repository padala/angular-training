/**
Each date related time is taken in epoch(milliseconds)

**/
var mydocument = document;

var input_form = mydocument.getElementById("form");
var given_date = mydocument.getElementById("date");
var given_time = mydocument.getElementById("time");

var changing_time = 0;
var interval_callback = false;

if (given_date.value == "")
    changing_time = (new Date()).getTime();
else
   changing_time = given_date.valueAsNumber;

input_form.addEventListener("change", changed_inputs)

 var is_timer_active = false;

/**
Event listner for both date and time input fields

**/
function changed_inputs(e) {

    e.preventDefault();

    if(interval_callback)
       stop_interval();

    var type = e.target.getAttribute("id");

    var current_time;

    if (given_date.value == "") {
        current_time = 0;
        changing_time = 0;
    } else {
        current_time = (new Date().getTime());
        changing_time = given_date.valueAsNumber;
    }

    // Set epoch to the current changing time variable.
    if (type == "time") {
        add_to_epoch();
    }

    // Doesn't allow old dates or past events
    if (changing_time - current_time < 0) {
        alert("select correct date");
        return;
    }

    //setinterval()
    interval_callback = setInterval(function() {

        var milliseconds = changing_time;

        var seconds = milliseconds / 1000;

        var minutes = seconds / 60;

        seconds %= 60;

        var hours = minutes / 60;

        minutes %= 60;

        var current_date = (new Date).getTime();

        var days = (changing_time - current_date) / 86400000;

        if (days < 0)
            days = 0;

        hours %= 24;

        var month = days/28;

        mydocument.getElementById("days").innerHTML = parseInt(days);
        mydocument.getElementById("hours").innerHTML = parseInt(hours);
        mydocument.getElementById("minutes").innerHTML = parseInt(minutes);
        mydocument.getElementById("seconds").innerHTML = parseInt(seconds);
        mydocument.getElementById("month").innerHTML = parseInt(month);

        changing_time -= 1000;
        if (changing_time < 0)  
            stop_interval();

    }, 1000)

}


/**
As date is already set, this function add hours, minutes and seconds to current epoch
**/
function add_to_epoch() {

    var given_timer = given_time.value.split(":");

    if (given_timer == "")
        return;

    var hours = Number(given_timer[0]);
    var minutes = Number(given_timer[1]);
    var seconds = 0;
    if (given_timer[2]) {
        seconds = Number(given_timer[2]);
    }

    changing_time += (hours * 3600000);
    changing_time += (minutes * 60000);
    changing_time += (seconds * 1000);
}

/**
Clear intervals
**/
function stop_interval(){
    clearInterval(interval_callback);
            interval_callback = false;
}

