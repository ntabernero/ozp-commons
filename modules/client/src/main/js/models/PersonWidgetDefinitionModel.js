define([
    'models/Model'
],

function(Model) {

    var PersonWidgetDefinitionModel = Model.extend({

        urlRoot: '/person-widget-definitions',

        defaults: {
            "personDisplayName": null,
            "position": 0,
            "disabled": false,
            "favorite": false,
            "groupWidget": false,
            "userWidget": false,
            "visibleForLaunch": true,
            "user": null,
            "widgetDefinition": null,
            "tags": []
        }

    });

    return PersonWidgetDefinitionModel;

});
