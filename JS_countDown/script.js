function getTimeDifference(endtime){
  var diff = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (diff/1000) % 60 );
  var minutes = Math.floor( (diff/1000/60) % 60 );
  var hours = Math.floor( (diff/(1000*60*60)) % 24 );
  var days = Math.floor( diff/(1000*60*60*24) );
  return {
    'total': diff,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function setClock(endtime) {
  function updateClock() {
    var result = getTimeDifference(endtime);
    document.getElementById('days').innerHTML = result.days;
    document.getElementById('hours').innerHTML = ('0' + result.hours).slice(-2);
    document.getElementById('minutes').innerHTML = ('0' + result.minutes).slice(-2);
    document.getElementById('seconds').innerHTML = ('0' + result.seconds).slice(-2);

    if (result.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// Input Goes here
var deadline = '31 December 2016';
setClock(deadline);
