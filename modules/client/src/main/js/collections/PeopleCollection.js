define([
    'models/PersonModel',
    'collections/Collection'
],

function(PersonModel, Collection) {
        
    var PeopleCollection = Collection.extend({
        
        model: PersonModel,

        url: '/people',
        
        comparator: function(person) {
            return person.get('fullname');
        }

    });

    return PeopleCollection;
});
