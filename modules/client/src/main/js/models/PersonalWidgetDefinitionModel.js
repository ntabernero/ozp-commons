define([
    'models/Model'
],

function(Model) {

    var PersonalWidgetDefinitionModel = Model.extend({

        urlRoot: '/ozp/rest/owf/person-widget-definitions',

        defaults: {
            "displayName": null,
            "position": 0,
            "assignedByGroup": false,
            "assignedToPerson": false,
            "disabled": false,
            "favorite": false,
            "visibleForLaunch": true,
            "person": null,
            "widgetDefinition": null,
            "tags": []
        }

    });

    return PersonalWidgetDefinitionModel;

});
