define([
    'models/WidgetDefinitionModel',
    'collections/Collection'
],

function(WidgetDefinitionModel, Collection) {

    var WidgetDefinitionsCollection = Collection.extend({
        
        model: WidgetDefinitionModel,

        url: '/widget-definitions',
        
        comparator: function(widget) {
            return widget.get('displayName');
        }

    });

    return WidgetDefinitionsCollection;
});
