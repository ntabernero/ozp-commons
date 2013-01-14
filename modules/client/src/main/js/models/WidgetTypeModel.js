define([
    'models/WidgetTypeModel'
],

function(Model) {

    var WidgetTypeModel = Model.extend({
        urlRoot: '/widget-types',
        
        defaults: {
            "name:": ""
        }

    });

    return WidgetTypeModel;

});
