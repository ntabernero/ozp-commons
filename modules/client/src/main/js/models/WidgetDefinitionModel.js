define([
    'models/Model'
],

function(Model) {

    var WidgetDefinitionModel = Model.extend({

        urlRoot: '/widget-definitions',

        defaults: {
            "guid": null,
            "name": null,
            "originalName": null,
            "version": null,
            "description": null,
            "url": null,
            "universalName": "",
            "displayName": "",
            "widgetUrl": null,
            "descriptorUrl": null,
            "imageUrlLarge": null,
            "imageUrlSmall": null,
            "widgetVersion": null,
            "height": 200,
            "width": 200,
            "background": false,
            "singleton": false,
            "visibleForLaunch": true,
            "tags": ""   
        }

    });

    return WidgetDefinitionModel;

});
