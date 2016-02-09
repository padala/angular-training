
var module=angular.module("myApp",[]);
module.service("EmployeeService",function()
{
var uid=1;
var users=[
{
	id:0,
	name:"karthik",
	occ:"software",
	logo:"http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png",
	email:"karthik.velishala@fissionlabs.in",
	pl1:"www.google.com",
	pl2:"www.fb.com"
}];
this.save=function(user)
{
	if(user.id==null)
	{
		user.id=uid++;
		users.push(user);
	}
	else
	{
		for(i in users)
		{
			if(users[i].id==user.id)
			{
				users[i]=user;
			}
		}
	}
}
this.get=function(id)
{
	for(i in users)
	{
		if(users[i].id==id)
		{
			return users[i];
		}
	}
}
this.delete=function(id)
{
	for(i in users)
	{
		if(users[i].id==id)
		{
			users.splice(i,1);
		}
	}
}
this.list=function()
{
	return users;
}

}).controller('myCntrl',function($scope,EmployeeService)
{
	$scope.users=EmployeeService.list();
	$scope.addRow=function()
	{
		EmployeeService.save($scope.user);
		$scope.user={};
	}
	$scope.deleteValues=function(id)
	{
		EmployeeService.delete(id);
		if($scope.user.id==id)
			$scope.user={};
	}
	$scope.editValues=function(id)
	{
		$scope.user=angular.copy(EmployeeService.get(id));
		
	}
	$scope.loadValues=function(id)
	{
		$scope.user=angular.copy(EmployeeService.get(id));
		$scope.value=true;
	}
}).filter( 'titlecase', function() {
		return function(id) {
    var j = id % 10,
        k = id % 100;
    if (j == 1 && k != 11) {
        return id + "st";
    }
    if (j == 2 && k != 12) {
        return id + "nd";
    }
    if (j == 3 && k != 13) {
        return id + "rd";
    }
    return id + "th";
}
	}).directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, myCntrl) {
            function myValidation(value) {
                if (value=="software") {
                    myCntrl.$setValidity('valid', false);
                } else {
                    myCntrl.$setValidity('valid', true);
                }
                return value;
            }
            myCntrl.$parsers.push(myValidation);
        }
    };
});