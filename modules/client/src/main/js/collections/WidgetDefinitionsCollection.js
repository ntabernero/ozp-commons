define([
    'models/WidgetDefinitionModel',
    'collections/Collection'
],

function(WidgetDefinitionModel, Collection) {

    var WidgetDefinitionsCollection = Collection.extend({
        
        model: WidgetDefinitionModel,

        url: '/ozp/rest/owf/widget-defs',
        
        comparator: function(widget) {
            return widget.get('displayName');
        }

    });

    return WidgetDefinitionsCollection;
});
