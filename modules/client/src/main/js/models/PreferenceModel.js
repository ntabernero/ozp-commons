define([
    'models/Model'
],

function(Model) {

    var PreferenceModel = Model.extend({
        urlRoot: '/preferences',
        
        defaults: {
            "name": "",
            "namespace": "",
            "value": "",
            "person": null
        }

    });

    return PreferenceModel;

});
