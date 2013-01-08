define([
        'backbone'
],

function(Backbone) {

    var UserModel = Backbone.Model.extend({
        
        urlRoot: '/owf/1.0/users',
        
        defaults: {
            "id": "",
            "username": "",
            "email": "",
            "totalGroups": 0,
            "totalWidgets": 0,
            "totalDashboards": 0,
            "totalStacks": 0,
            "lastLogin": "",
            "title": ""
        }

    });

    return UserModel;

});