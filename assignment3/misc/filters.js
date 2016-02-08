app.filter('serial_check', function() {
  return function(input) {

    if(input%10==3)
      return input+"rd";
    if(input%10==2)
      return input+"nd";
    if(input%10==1)
      return input+"st";
    if(input%10 >= 4 || input%10 == 0)
    return input+"th";

  return input;
  };
});