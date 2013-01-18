define([
    'models/Model'
],

function(Model) {

    var StackModel = Model.extend({
        urlRoot: '/stacks',
        
        defaults: {
            "name": "",
            "description": "",
            "urlName": "",
            "descriptorUrl": "",
            
            "dashboards": [],
            "people": [],
            "groups": []
        }

    });

    return StackModel;

});
