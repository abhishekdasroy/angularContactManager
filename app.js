var app = angular.module('app',[]);


app.service('ContactService', function(){

//to create unique contact id
var uid=1;
//contacts array to hold list of all contacts
var contacts= [
{
    id:0,
  'name':"Abhishek",
  'email':'abhi.das.roy@gmail.com',
  'phone':'+91-9473655712',

}];

//save method create a new contact if not already exists
   

    //else update the existing object



this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }
this.get = function(id)
{
    for(i in contacts)
    {
      if (contacts[i].id == id)
      {
        return contacts[i];
      }
    }

}// end of getid

//iterate through contacts list and delete 
    //contact if found

    this.delete = function (id)
    {
        for(i in contacts)
        {
            if(contacts[i].id == id)
            {
                contacts.splice(i,1);
            }

        }
    }

      //simply returns the contacts list
      this.list=function()
      {
         
         return contacts;

      }



});//End Of ContactService

 app.controller('ContactController',function($scope,ContactService){
    $scope.contacts=ContactService.list();

    $scope.saveContact= function(){
    ContactService.save($scope.newcontact);
    $scope.newcontact={};
}
 $scope.delete=function(id)
 {
ContactService.delete(id);
if($scope.newcontactid == id)
{
    $scope.newcontact= {};
}

 }



 $scope.edit=function(id)
 {
   $scope.newcontact=angular.copy(ContactService.get(id));
 }





 });//End of contactcontroller


