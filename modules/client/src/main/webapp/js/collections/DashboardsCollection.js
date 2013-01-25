define([
    'models/DashboardModel',
    'collections/Collection'
],

function(DashboardModel, Collection) {

    var DashboardsCollection = Collection.extend({
        
        model: DashboardModel,

        url: '/groups/dashboards'

    });
    
    return DashboardsCollection;

});
