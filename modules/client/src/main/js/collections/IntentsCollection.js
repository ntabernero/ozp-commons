define([
    'models/IntentModel',
    'collections/Collection'
],

function(IntentModel, Collection) {

    var IntentsCollection = Collection.extend({
        
        model: IntentModel,
        
        url: '/owf/1.0/intents'


    });

    return IntentsCollection;
});
