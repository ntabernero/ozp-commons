define([
    'models/IntentModel',
    'backbone'
],

function(IntentModel, Backbone) {

    var IntentsCollection = Backbone.Collection.extend({
        
        model: IntentModel,
        
        url: '/owf/1.0/intents'


    });

    return IntentsCollection;
});
