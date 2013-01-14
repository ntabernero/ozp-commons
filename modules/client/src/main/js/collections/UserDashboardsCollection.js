define([
    'models/UserDashboardModel',
    'collections/Collection'
],

function(UserDashboardModel, Collection) {

    var UserDashboardsCollection = Collection.extend({
        
        model: UserDashboardModel,

        url: '/users'

    });
    
    return DashboardsCollection;

});
