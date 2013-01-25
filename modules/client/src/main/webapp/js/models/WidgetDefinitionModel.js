define([
    'models/Model'
],

function(Model) {

    var WidgetDefinitionModel = Model.extend({

        urlRoot: '/widget-defs',

        defaults: {
            "guid": null,
            "displayName": "",
            "widgetUrl": null,
            "imageUrlLarge": null,
            "imageUrlSmall": null,
            "widgetType": null,
            
            "universalName": "",
            "description": null,
            "descriptorUrl": null,
            "version": null,
            
            "height": 200,
            "width": 200,
            "background": false,
            "singleton": false,
            "visibleForLaunch": true,
            
            "originalName": null,
            "sendableIntents": null,
            "receivableIntents": null,
            "tags": ""   
        }

    });

    return WidgetDefinitionModel;

});
