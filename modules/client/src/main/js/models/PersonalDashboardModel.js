define([
    'backbone',
    'models/DashboardModel'
],

function(Backbone, DashboardModel) {

    var PersonalDashboardModel = DashboardModel.extend({

        idAttribute: 'guid',
        
        defaults: function() {
            return _.extend({},DashboardModel.prototype.defaults, {
                person: null
            });
        },
        
        url: function() {
            var url = '/people';
            if (!_.isUndefined(this.get('person'))) {
                url = url + '/' + this.get('person');
            }
            url = url + '/dashboards';
            if (!_.isUndefined(this.get('guid')) && (this.get('guid') != null)) {
                url = url + '/' + this.get('guid');
            }
            
            return url;
        }

    });
    
    return PersonalDashboardModel;

});
