define([
    'models/Model'
],

function(Model) {

    var WidgetModel = Model.extend({

        urlRoot: '/owf/1.0/widgets',

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
            
        },

        parse: function (response) {
            response.value.id = response.path;
            return response.value;
        }

    });

    return WidgetModel;

});
