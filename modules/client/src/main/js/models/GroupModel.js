define([
    'models/Model'
],

function(Model) {

    var GroupModel = Model.extend({
        urlRoot: '/groups',
        
        defaults: {
            "name": "",
            "description": "",
            "displayName": "",
            "active": true,
            "automatic": false,
            
            "dashboards": [],
            "people": [],
            "widgetDefinitions": [],
            "stacks":[]
        }

    });

    return GroupModel;

});
