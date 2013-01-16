define('collections/PersonDashboardsCollection', [
    'models/PersonDashboardModel',
    'collections/Collection'
],

function(PersonDashboardModel, Collection) {

    var PersonDashboardsCollection = Collection.extend({
        
        model: PersonDashboardModel,

        url: '/persons'

    });
    
    return PersonDashboardsCollection;

});
