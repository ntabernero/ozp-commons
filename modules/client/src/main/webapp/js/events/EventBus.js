define([
    'backbone',
    'lodash'
],
function(Backbone, _) {
    'use strict';

    var EventBus = _.extend({}, {
        on: Backbone.Events.on,
        off: Backbone.Events.off,
        trigger: Backbone.Events.trigger
    });

    return EventBus;

});
