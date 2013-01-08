define([
    'backbone'
],

function(Backbone) {

    var IntentModel = Backbone.Model.extend({
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