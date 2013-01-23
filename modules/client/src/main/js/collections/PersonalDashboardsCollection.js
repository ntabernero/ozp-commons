define([
    'models/PersonalDashboardModel',
    'collections/Collection'
],

function(PersonalDashboardModel, Collection) {

    var PersonDashboardsCollection = Collection.extend({
        
        model: PersonalDashboardModel,

        initialize: function(options) {
            options || (options = {});
            this.person = options.person;
        },
        
        setPerson: function(person) {
            this.person = person;
        },
          
        url: function() {
            var url = '/people';
            if (!_.isUndefined(this.person)) {
                url = url + '/' + this.person;
            }
            url = url + '/dashboards';
            
            return url;
        }

    });
    
    return PersonDashboardsCollection;

});
