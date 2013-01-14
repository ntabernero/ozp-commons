define([
    'models/Model'
],

function(Model) {

    var DashboardModel = Model.extend({

        idAttribute: "guid",
        urlRoot: '/groups',

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
            "locked": false,
            "user": null
        },

        initialize: function() {
            if( _.isString(this.get('layoutConfig')) )
                this.set( 'layoutConfig', JSON.parse(this.get('layoutConfig')), {silent: true} );
            
            // TODO: Add a utility to generate a guid.
            //var guid = this.get('guid');
            // if( _.isNull(guid) || (_.isString(guild) && guid.length == 0))
            //    this.set('guid', guid.util.guid())
        }

    });

    return DashboardModel;

});
