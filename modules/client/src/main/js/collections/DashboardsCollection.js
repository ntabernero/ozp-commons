define([
    'models/DashboardModel', 
    'backbone'
],

function(DashboardModel, Backbone) {

    var DashboardsCollection = Backbone.Collection.extend({
        
        model: DashboardModel,

        url: '/owf/1.0/dashboards'

    });
    
    return DashboardsCollection;

});
