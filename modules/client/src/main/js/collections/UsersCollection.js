define([
    'models/UserModel',
    'collections/Collection'
],

function(UserModel, Collection) {
        
    var UsersCollection = Collection.extend({
        
        model: UserModel,

        url: '/owf/1.0/users'

    });

    return UsersCollection;
});
