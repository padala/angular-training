app.service("controllers_handler_service", function () {
return {
	get_contact: function (KEY_INDEX) {
return JSON.parse(localStorage.getItem(KEY_INDEX));
},
get_contacts: function () {
var values=[];
for(var i=0, len=localStorage.length; i<len; i++) {
var key = localStorage.key(i);
var value = localStorage[key];
values.push(JSON.parse(value));
}
return values;
},
set_contact: function (contact) {
localStorage.setItem(contact.KEY_INDEX, JSON.stringify(contact));
return contact;
},
delete_contact :function(key){
  localStorage.removeItem(key);
console.log("Contact deleted");
}
};
});
