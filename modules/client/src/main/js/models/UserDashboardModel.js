define([
    'backbone',
    'models/DashboardModel'
],

function(Backbone, DashboardModel) {

    var UserDashboardModel = DashboardModel.extend({

        urlRoot: '/users',

        defaults: {
            "user": null
        },
        
        sync: function(method, model, options) {
            // Clone options before changing it.
            options = _(options).clone();
            // Inject the user into the url.  
            // TODO: How best to handle an empty user field?
            options.url = model.urlRoot + '/' + model.get('user') + '/dashboards';
            
            return Backbone.sync(method, model, options);
        }

    });
    
    return UserDashboardModel;

});
