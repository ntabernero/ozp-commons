define([
    'models/PersonModel',
    'collections/Collection'
],

function(PersonModel, Collection) {
        
    var PersonsCollection = Collection.extend({
        
        model: PersonModel,

        url: '/persons',
        
        comparator: function(user) {
            return contact.get('personRealName');
        }

    });

    return PersonsCollection;
});
