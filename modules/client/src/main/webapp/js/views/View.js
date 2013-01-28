define([
    'backbone',
    'jquery'
],

function(Backbone, $) {

    var View = Backbone.View.extend({

        //events that will be bound to the model or collection.
        //Syntax is similar to the 'events' property
        modelEvents: null,

        initialize: function() {
            Backbone.View.prototype.initialize.apply(this, arguments);

            if (this.modelEvents) {
                this._prepareModelEvents();

                if (this.model)
                    this.listenTo(this.model, this.modelEvents);
                if (this.collection)
                    this.listenTo(this.collection, this.modelEvents);
            }
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
        }

    });

    return View;

});
