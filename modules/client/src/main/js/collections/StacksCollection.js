define([
    'models/StackModel',
    'collections/Collection'
],

function(StackModel, Collection) {
        
    var StacksCollection = Collection.extend({
        
        model: StackModel,

        url: '/stacks',
        
        comparator: function(stack) {
            return stack.get('name');
        }

    });

    return StacksCollection;
});
