define([
    'models/Model'
],

function(Model) {

    var PreferenceModel = Model.extend({
        urlRoot: '/ozp/rest/owf/preferences',
        
        defaults: {
            "name": "",
            "namespace": "",
            "value": ""
//            "person": null
        }

    });

    return PreferenceModel;

});
