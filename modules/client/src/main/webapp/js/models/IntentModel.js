define([
    'models/Model'
],

function(Model) {

    var IntentModel = Model.extend({
        urlRoot: '/intents',
        
        defaults: {
            "action": "",
            "dataType": ""
        }

    });

    return IntentModel;

});