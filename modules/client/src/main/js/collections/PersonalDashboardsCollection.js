define([
    'models/PersonalDashboardModel',
    'collections/Collection'
],

function(PersonalDashboardModel, Collection) {

    var PersonDashboardsCollection = Collection.extend({
        
        model: PersonDashboardModel,

        url: '/persons'

    });
    
    return PersonDashboardsCollection;

});
