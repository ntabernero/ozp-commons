define([
    'models/Model'
],

function(Model) {

    var UserModel = Model.extend({
        
        urlRoot: '/users',
        
        defaults: {
            "id": "",
            "username": "",
            "email": "",
            "totalGroups": 0,
            "totalWidgets": 0,
            "totalDashboards": 0,
            "totalStacks": 0,
            "lastLogin": "",
            "userRealName": ""
        }

    });

    return UserModel;

}); 