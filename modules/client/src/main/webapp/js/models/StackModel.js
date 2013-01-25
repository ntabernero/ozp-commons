define([
    'models/Model'
],

function(Model) {

    var StackModel = Model.extend({
        urlRoot: '/ozp/rest/owf/stacks',
        
        defaults: {
            "name": "",
            "description": "",
            "urlName": "",
            "descriptorUrl": ""
        }

    });

    return StackModel;

});
