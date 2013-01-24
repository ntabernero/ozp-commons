define([
    'models/Model'
],

function(Model) {

    var DashboardModel = Model.extend({

        idAttribute: "guid",

        defaults: {
            "name": null,
            "description": null,
            "layoutConfig": null,
            "alteredByAdmin": false,
            "defaultDashboard": false,
            "dashboardPosition": 0,
            //"removed": false,
            //"groups": [],
            //"isGroupDashboard": false,
            //"createdDate": null,
            //"createdBy": null,
            //"editedDate": null,
            //"stack": null,
            "locked": false
        }

    });

    return DashboardModel;

});

