
function buttonClick(){
var End=document.getElementById("Endtime").value;
           
  countdown(End,callback); // Date format ('MM/DD/YYYY  HH:MM:SS TT');
            
  function callback(){
       alert('Time Out'); 

  };
  }
function countdown(endT,callback) {
        var days,hours,minutes,sec,timer;
                end = new Date(endT);
                end = end.getTime(); //Get initial Date in Milliseconds,
        if (isNaN(end)) {
           alert('@ countdown.js @  "Invalid Date", valid format- mm/dd/yyyy hh:mm:ss TT ');
           return;
        }
                timer = setInterval(calculate,1000);//Timer to calculate remaining time

        function calculate(){
         var current = new Date();
         var remaining = parseInt((end - current.getTime())/1000-5.5*60*60);//remaining seconds, 
          
            if (remaining <= 0){
                clearInterval(timer);
                days=0;
                hours=0;
                minutes=0;
                sec=0;
                display(days,hours,minutes,sec);
                if (typeof callback === 'function' ) {
                    callback();
                }
                
            }else{
                
                days = parseInt(remaining/86400);
                remaining = (remaining%86400);
                hours = parseInt(remaining/3600);
                remaining = (remaining%3600);
                minutes = parseInt(remaining/60);
                remaining = (remaining%60);
                sec = parseInt(remaining);
                display(days,hours,minutes,sec);
                
                
            }
        }
        //Function For displaying Results in HTML page with specific ID's 
        function display(days,hours,minutes,sec) {
            var dl = days.toString().length;
            if (dl == "1") {
                sl = 2;
            }else{
                if (isNaN(dl)) {
                    sl = 3;
                }
                sl = dl;
            }
            document.getElementById("days").innerHTML = ("00"+days).slice(-sl);
            document.getElementById("hours").innerHTML = ("0"+hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0"+minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0"+sec).slice(-2);
        }
     
    }