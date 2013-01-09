define([
    'models/Model'
],

function(Model) {

    var DashboardModel = Model.extend({

        idAttribute: "guid",
        urlRoot: '/owf/1.0/dashboards',

        defaults: {
            guid: null,
            name: null,
            description: null,
            layoutConfig: null
        },

        initialize: function() {
            if( _.isString(this.get('layoutConfig')) )
                this.set( 'layoutConfig', JSON.parse(this.get('layoutConfig')), {silent: true} );
        }

    });

    return DashboardModel;

});
