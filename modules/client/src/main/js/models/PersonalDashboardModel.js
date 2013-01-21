define([
    'backbone',
    'models/DashboardModel'
],

function(Backbone, DashboardModel) {

    var PersonalDashboardModel = DashboardModel.extend({

        urlRoot: '/people',

        defaults: function() {
            return _.extend({},DashboardModel.prototype.defaults, {
                person: null
            });
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
    
    return PersonalDashboardModel;

});