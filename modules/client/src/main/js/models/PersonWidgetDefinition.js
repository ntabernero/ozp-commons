define([
    'models/Model'
],

function(Model) {

    var UserWidgetDefinitionModel = Model.extend({

        urlRoot: '/user-widget-definitions',

        defaults: {
            "userDisplayName": null,
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

    return UserWidgetDefinitionModel;

});
