define([
    'models/WidgetModel',
    'collections/Collection'
],

function(WidgetModel, Collection) {

    var WidgetsCollection = Collection.extend({
        
        model: WidgetModel,

        url: '/owf/1.0/widgets'

    });

    return WidgetsCollection;
});
