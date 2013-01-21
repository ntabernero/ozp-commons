define([
    'models/GroupModel',
    'collections/Collection'
],

function(GroupModel, Collection) {
        
    var GroupsCollection = Collection.extend({
        
        model: GroupModel,

        url: '/groups',
        
        comparator: function(group) {
            return group.get('displayName');
        }

    });

    return GroupsCollection;
});