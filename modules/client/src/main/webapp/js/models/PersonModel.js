define([
    'models/Model'
],

function(Model) {

    var PersonModel = Model.extend({
        
        urlRoot: '/ozp/rest/owf/persons',
        
        defaults: {
            "username": "",
            "fullname": "",
            "email": "",
            "lastLogin": "",
            "prevLogin": ""
        }

    });

    return PersonModel;

}); 
