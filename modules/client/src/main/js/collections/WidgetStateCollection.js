define([
    'models/WidgetStateModel',
    'collections/Collection'
],

function(WidgetStateModel, Collection) {

    var WidgetStateCollection = Collection.extend({
        
        url: '/owf/1.0/widgetstates',
        
        model: WidgetStateModel

    });

    return WidgetStateCollection;
});
