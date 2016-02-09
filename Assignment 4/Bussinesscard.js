var app = angular.module('myApp', []);

app.service('ContactService', function () {
    var uid = 1;
    var id = 0;	
    var contacts = [{
        
         "name":"SyamSandeep",
	     "desg":"Software engineer",
		 "logo":"image.png",
		 "email":"syam.sandeep@fissionlabs.in",
		 "personallink1":"www.google.com",
		 "personallink2":"www.facebook.com"
    }];
 
    this.save = function (contact) {
        if (contact.id == null) {
            contact.id = uid++;
            contacts.push(contact);
        } else {
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
   
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    this.list = function () {
        return contacts;
    }
});

app.controller('businesscntrl', function ($scope, ContactService) {

    $scope.contacts = ContactService.list();

    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
		$scope.disable=false;
    }
	
	$scope.load = function (id){
		$scope.newcontact = angular.copy(ContactService.get(id));
		$scope.disable=true;
		
	}
});