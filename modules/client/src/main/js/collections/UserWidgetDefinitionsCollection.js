define([
    'models/UserWidgetDefinitionModel',
    'collections/Collection'
],

function(UserWidgetDefinitionModel, Collection) {

    var UserWidgetDefinitionsCollection = Collection.extend({
        
        model: WidgetDefinitionModel,

        url: '/user-widget-definitions',
        
        comparator: function(user) {
            return contact.get('displayName');
        }

    });

    return UserWidgetDefinitionsCollection;
});
