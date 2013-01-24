define([
    'models/PreferenceModel',
    'collections/Collection'
],

function(PreferenceModel, Collection) {
        
    var PreferencesCollection = Collection.extend({
        
        model: PreferenceModel,

        url: '/ozp/rest/owf/preferences',
        
        comparator: function(preference) {
            return preference.get('namespace') + '.' + preference.get('name');
        }

    });

    return PreferencesCollection;
});
