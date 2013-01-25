define([
    'models/DashboardModel',
    'collections/Collection'
],

function(DashboardModel, Collection) {

    var GroupDashboardsCollection = Collection.extend({
        
        model: DashboardModel,

        url: '/ozp/rest/owf/group-dashboards'

    });
    
    return GroupDashboardsCollection;

});
