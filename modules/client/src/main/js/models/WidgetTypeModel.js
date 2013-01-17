define([
    'models/Model'
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
