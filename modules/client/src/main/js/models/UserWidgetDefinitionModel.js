define([
    'models/Model'
],

function(Model) {

    var UserWidgetDefinitionModel = Model.extend({

        urlRoot: '/owf/1.0/widgets',

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
