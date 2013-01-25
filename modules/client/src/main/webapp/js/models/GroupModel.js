define([
    'models/Model'
],

function(Model) {

    var GroupModel = Model.extend({
        urlRoot: '/ozp/rest/owf/groups',
        
        defaults: {
            "name": "",
            "description": "",
            "displayName": "",
            "active": true,
            "automatic": false
            
//            "dashboards": [],
//            "people": [],
//            "widgetDefinitions": [],
//            "stacks":[]
        }

    });

    return GroupModel;

});
