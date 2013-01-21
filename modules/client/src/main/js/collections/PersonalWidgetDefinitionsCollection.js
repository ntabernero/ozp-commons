define([
    'models/PersonalWidgetDefinitionModel',
    'collections/Collection'
],

function(PersonalWidgetDefinitionModel, Collection) {

    var PersonalWidgetDefinitionsCollection = Collection.extend({
        
        model: PersonalWidgetDefinitionModel,

        url: '/personal-widget-definitions',
        
        comparator: function(widget) {
            return widget.get('displayName');
        }

    });

    return PersonalWidgetDefinitionsCollection;
});
