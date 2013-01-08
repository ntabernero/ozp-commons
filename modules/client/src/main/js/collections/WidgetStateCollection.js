define([
    'models/WidgetStateModel',
    'backbone'
],

function(WidgetStateModel, Backbone) {

    var WidgetStateCollection = Backbone.Collection.extend({
        
        url: '/owf/1.0/widgetstates',
        
        model: WidgetStateModel

    });

    return WidgetStateCollection;
});
