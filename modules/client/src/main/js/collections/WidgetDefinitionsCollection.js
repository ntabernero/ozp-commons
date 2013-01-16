define('collections/WidgetDefinitionsCollection', [
    'models/WidgetDefinitionModel',
    'collections/Collection'
],

function(WidgetDefinitionModel, Collection) {

    var WidgetDefinitionsCollection = Collection.extend({
        
        model: WidgetDefinitionModel,

        url: '/widget-definitions',
        
        comparator: function(user) {
            return contact.get('displayName');
        }

    });

    return WidgetDefinitionsCollection;
});
