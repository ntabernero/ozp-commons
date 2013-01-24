define([
    'models/GroupModel',
    'collections/Collection'
],

function(GroupModel, Collection) {
        
    var GroupsCollection = Collection.extend({
        
        model: GroupModel,

        url: '/ozp/rest/owf/groups',
        
        comparator: function(group) {
            return group.get('displayName');
        }

    });

    return GroupsCollection;
});