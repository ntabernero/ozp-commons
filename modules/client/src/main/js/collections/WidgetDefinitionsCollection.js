define([
    'models/WidgetDefinitionModel',
    'collections/Collection'
],

function(WidgetDefinitionModel, Collection) {

    var WidgetDefinitionsCollection = Collection.extend({
        
        model: WidgetDefinitionModel,

        url: '/owf/1.0/widgets'

    });

    return WidgetDefinitionsCollection;
});
