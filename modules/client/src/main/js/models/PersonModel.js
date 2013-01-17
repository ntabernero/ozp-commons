define([
    'models/Model'
],

function(Model) {

    var PersonModel = Model.extend({
        
        urlRoot: '/persons',
        
        defaults: {
            "personName": "",
            "email": "",
            "totalGroups": 0,
            "totalWidgets": 0,
            "totalDashboards": 0,
            "totalStacks": 0,
            "lastLogin": "",
            "personRealName": ""
        }

    });

    return PersonModel;

}); 