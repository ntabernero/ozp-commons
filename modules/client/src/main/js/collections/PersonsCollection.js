define([
    'models/PersonModel',
    'collections/Collection'
],

function(PersonModel, Collection) {
        
    var PersonsCollection = Collection.extend({
        
        model: PersonModel,

        url: '/persons',
        
        comparator: function(person) {
            return person.get('personRealName');
        }

    });

    return PersonsCollection;
});
