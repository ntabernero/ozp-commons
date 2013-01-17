define([
    'models/WidgetTypeModel',
    'backbone'
],

function(WidgetTypeModel, Backbone) {

    var WidgetTypesCollection = Backbone.Collection.extend({
        
        model: WidgetTypeModel,
        
        url: '/widget-types'

    });

    return WidgetTypesCollection;
});
