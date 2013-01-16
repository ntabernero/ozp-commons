define('collections/WidgetStatesCollection', [
    'models/WidgetStateModel',
    'backbone'
],

function(WidgetStateModel, Backbone) {

    var WidgetStatesCollection = Backbone.Collection.extend({
        
        model: WidgetStateModel

    });

    return WidgetStatesCollection;
});
