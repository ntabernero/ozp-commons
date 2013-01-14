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
        
        "sync": function(method, model, options) {
            options.url = model.urlRoot + '/' + model.get('user') + '/dashboards';
            
            return Backbone.sync(method, model, options);
        }

    });
    
    return UserDashboardModel;

});
