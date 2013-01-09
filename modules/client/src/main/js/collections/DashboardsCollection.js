define([
    'models/DashboardModel',
    'collections/Collection'
],

function(DashboardModel, Collection) {

    var DashboardsCollection = Collection.extend({
        
        model: DashboardModel,

        url: '/owf/1.0/dashboards'

    });
    
    return DashboardsCollection;

});
