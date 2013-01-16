define('views/View', [
    'backbone',
    'jquery'
],

function(Backbone, $) {

    var View = Backbone.View.extend({

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
        }

    });

    return View;

});
