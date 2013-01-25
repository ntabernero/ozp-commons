define([
    'backbone',
    'models/DashboardModel',

    'lodash'
],

function(Backbone, DashboardModel, _) {

    var PersonalDashboardModel = DashboardModel.extend({

        idAttribute: 'guid',
        
        defaults: function() {
            return _.extend({},DashboardModel.prototype.defaults, {
                // person: null
            });
        },
        
//        url: function() {
//            var url = '/people';
//            if (!_.isUndefined(this.get('person'))) {
//                url = url + '/' + this.get('person');
//            }
//            url = url + '/dashboards';
//            if (!_.isUndefined(this.get('guid')) && (this.get('guid') != null)) {
//                url = url + '/' + this.get('guid');
//            }
//            
//            return url;
//        }
         urlRoot: '/ozp/rest/owf/personal-dashboards'
    });
    
    return PersonalDashboardModel;

});
