define([
    'models/WidgetTypeModel'
],

function(Model) {

    var WidgetTypeModel = Model.extend({
        urlRoot: '/owf/1.0/intents',
        
        defaults: {
            "name:": ""
        }

    });

    return WidgetTypeModel;

});
