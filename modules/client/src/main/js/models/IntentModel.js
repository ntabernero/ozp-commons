define([
    'models/Model'
],

function(Model) {

    var IntentModel = Model.extend({
        urlRoot: '/owf/1.0/intents',
        
        defaults: {
            "action": "",
            "dataType": "",
            "send": "",
            "receive": ""
        }

    });

    return IntentModel;

});