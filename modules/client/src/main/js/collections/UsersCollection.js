define([
    'models/UserModel',
    'collections/Collection'
],

function(UserModel, Collection) {
        
    var UsersCollection = Collection.extend({
        
        model: UserModel,

        url: '/users',
        
        comparator: function(user) {
            return contact.get('userRealName');
        }

    });

    return UsersCollection;
});
