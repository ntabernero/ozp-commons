define([
    'backbone',
    'models/DashboardModel'
],

function(Backbone, DashboardModel) {

    var PersonDashboardModel = DashboardModel.extend({

        urlRoot: '/users',

        defaults: {
            "person": null
        },
        
        sync: function(method, model, options) {
            // Clone options before changing it.
            options = _(options).clone();
            // Inject the user into the url.  
            // TODO: How best to handle an empty user field?
            options.url = model.urlRoot + '/' + model.get('person') + '/dashboards';
            
            return Backbone.sync(method, model, options);
        }

    });
    
    return PersonDashboardModel;

});
