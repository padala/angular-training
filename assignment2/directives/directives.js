app.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            scope.changeText= function(text) {
              //element.text("update")
              /*var text=element.text();
              if(text!="Save")
                element.text("Save");
              else 
                element.text("update")*/
              element.text(text);
            };
        }
    };
});

app.directive('isDisabled',function(){

    return{
        link:function(scope, element, attrs){
         if(scope.is_disabled){
          angular.element('input',element).attr('disabled','disabled') ;
         }
       }
     }
    });