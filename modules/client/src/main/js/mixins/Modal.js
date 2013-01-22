define([
    'jquery',
    'bootstrap/bootstrap-modal'
],
function($) {

    var ModalMixin = {
        
        initialize: function() {
            var cls = 'modal hide ';
            this.options.animate && (cls += 'fade');
            this.$el.addClass(cls);
        },

        show: function() {
            var me = this,
                dfd = $.Deferred();

            this.$el.one('show', function() {
                me.trigger('show');
            });
            this.$el.one('shown', function() {
                me.trigger('shown');
                dfd.resolve();
            });
            this.$el.modal('show');

            return dfd.promise();
        },

        hide: function() {
            var me = this,
                dfd = $.Deferred();

            this.$el.one('hide', function() {
                me.trigger('hide');
            });
            this.$el.one('hidden', function() {
                me.trigger('hidden');
                dfd.resolve();
            });
            this.$el.modal('hide');

            return dfd.promise();
        }

    };

    return ModalMixin;

});