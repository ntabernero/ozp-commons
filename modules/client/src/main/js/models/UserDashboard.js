define([
    'models/DashboardModel'
],

function(DashboardModel) {

    var UserDashboardModel = DashboardModel.extend({

        urlRoot: '/users/{id}/dashboard',

        defaults: {
            "user": null
        }

    });

    return UserDashboardModel;

});
