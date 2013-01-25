define([
        'models/PersonModel',
        'collections/Collection'
    ],

function(PersonModel, Collection) {
        
    var PeopleCollection = Collection.extend({
        
        model: PersonModel,

        url: '/ozp/rest/owf/persons',
        
        comparator: function(person) {
            return person.get('fullname');
        }

    });

    return PeopleCollection;
});
