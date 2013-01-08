define([
    'models/WidgetModel',
    'backbone'
],

function(WidgetModel, Backbone) {

    var WidgetsCollection = Backbone.Collection.extend({
        
        model: WidgetModel,

        url: '/owf/1.0/widgets'

    });

    return WidgetsCollection;
});
