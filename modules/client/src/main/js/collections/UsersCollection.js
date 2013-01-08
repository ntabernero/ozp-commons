define([
    'models/UserModel',
    'backbone'
],

function(UserModel, Backbone) {
        
    var UsersCollection = Backbone.Collection.extend({
        
        model: UserModel,

        url: '/owf/1.0/users'

    });

    return UsersCollection;
});
