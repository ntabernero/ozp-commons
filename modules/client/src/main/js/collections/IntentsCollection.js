define([
    'models/IntentModel',
    'collections/Collection'
],

function(IntentModel, Collection) {

    var IntentsCollection = Collection.extend({
        
        model: IntentModel,
        
        url: '/intents'


    });

    return IntentsCollection;
});
