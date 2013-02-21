/*
 * Copyright 2013 Next Century Corporation 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    'backbone',
    'jquery',
    'lodash',
    'backbone.declarative.views'
],

function(Backbone, $, _) {

    var View = Backbone.View.extend({

        //events that will be bound to the model or collection.
        //Syntax is similar to the 'events' property
        modelEvents: null,

        // array of events that will be relayed to a view instance from $el
        relayElEvents: null,

        initialize: function() {
            var me = this;

            _.extend(me, _.pick(me.options, 'modelEvents', 'relayElEvents'));

            // Store reference to the view instance, for easy retrieval of Backbone views from DOM Elements 
            me.$el.data('view', me);
            if (me.modelEvents) {
                me._prepareModelEvents();

                if (me.model) {
                    me.listenTo(me.model, me.modelEvents);
                }
                if (me.collection) {
                    me.listenTo(me.collection, me.modelEvents);
                }
            }

            if(me.relayElEvents) {
                _( _.result(this, 'relayElEvents') ).each(function (eventName, index) {
                    me.$el.on(eventName + '.relayElEvents' + this.cid, function () {
                        me.trigger(eventName, arguments);
                    });
                });
            }
            Backbone.View.prototype.initialize.apply(me, arguments);
        },

        show: function() {
            var dfd = $.Deferred();
            this.$el.css('display', '');
            this.trigger('show');

            return dfd.resolve().promise();
        },

        hide: function () {
            var dfd = $.Deferred();
            this.$el.css('display', 'none');
            this.trigger('hide');

            return dfd.resolve().promise();
        },

        //turn string fn names into actual functions
        _prepareModelEvents: function() {

            //clone so we preparations only affect this instance
            var modelEvents = _.clone(_.result(this, 'modelEvents')),
                evt,
                fn;

            for (evt in modelEvents) {
                fn = modelEvents[evt];

                if (typeof fn === 'string') 
                    modelEvents[evt] = _.bind(this[fn], this);
            }

            this.modelEvents = modelEvents;
        },

        remove: function() {
            if (this.isRendered) {
                this.trigger('remove', this);
            }

            return Backbone.View.prototype.remove.apply(this, arguments);
        }

    });

    return View;

});
