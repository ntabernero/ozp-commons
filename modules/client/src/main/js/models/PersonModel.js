define([
    'models/Model'
],

function(Model) {

    var PersonModel = Model.extend({
        
        urlRoot: '/people',
        
        defaults: {
            "username": "",
            "fullname": "",
            "email": "",
            "lastLogin": "",
            "prevLogin": "",
            "totalGroups": 0,
            "totalWidgets": 0,
            "totalDashboards": 0,
            "totalStacks": 0     
        }

    });

    return PersonModel;

}); 
