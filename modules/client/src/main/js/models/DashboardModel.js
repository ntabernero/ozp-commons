define([
    'models/Model'
],

function(Model) {

    var DashboardModel = Model.extend({

        idAttribute: "guid",
        //urlRoot: '/groups',

        defaults: {
            "guid": null,
            "name": null,
            "description": null,
            "layoutConfig": null,
            "alteredByAdmin": false,
            "isdefault": false,
            "dashboardPosition": 0,
            "removed": false,
            "groups": [],
            "isGroupDashboard": false,
            "createdDate": null,
            "createdBy": null,
            "editedDate": null,
            "stack": null,
            "locked": false
        }

    });

    return DashboardModel;

});
