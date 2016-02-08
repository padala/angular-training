app.controller('card',['$scope','controllers_handler_service',function($scope, controllers_handler_service){

	
$scope.contact={};
$scope.contacts=[];
$scope.is_disabled = false;
$scope.contact.KEY_INDEX = localStorage.length;
$scope.contact.name="Bhasuri Kona";
$scope.contact.email="kbhasuri@gmail.com";
$scope.contact.occupation="Developer";
$scope.contact.image_src="http://oi64.tinypic.com/257lmwk.jpg";

$scope.edit_contact = function(key){
$scope.contact = controllers_handler_service.get_contact(key);
$scope.changeText("update");
$scope.is_disabled = false;
}

$scope.delete_contact = function(key){

controllers_handler_service.delete_contact(key);
$scope.update_table();
}

$scope.load_contact = function(key){
$scope.contact = controllers_handler_service.get_contact(key);
$scope.is_disabled = true;
}
$scope.save_model = function(){

if($scope.contact.KEY_INDEX == 0)
  $scope.contact.KEY_INDEX++;

controllers_handler_service.set_contact($scope.contact);

//localStorage.setItem($scope.contact.KEY_INDEX, JSON.stringify($scope.contact));
//controllers_handler_service.setContact($scope.contact);
$scope.update_table();
$scope.contact.KEY_INDEX++;
$scope.changeText("save");
//$scope.update_table();
}


$scope.update_table = function(){
$scope.contacts = controllers_handler_service.get_contacts();
console.log($scope.contacts)
}


 $scope.update_table();



}])