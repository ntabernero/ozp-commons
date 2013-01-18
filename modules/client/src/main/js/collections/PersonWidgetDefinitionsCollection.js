define([
    'models/PersonWidgetDefinitionModel',
    'collections/Collection'
],

function(PersonWidgetDefinitionModel, Collection) {

    var PersonWidgetDefinitionsCollection = Collection.extend({
        
        model: PersonWidgetDefinitionModel,

        url: '/person-widget-definitions',
        
        comparator: function(user) {
            return contact.get('fullname');
        }

    });

    return PersonWidgetDefinitionsCollection;
});
