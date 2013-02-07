define([
    'views/View'
], function (View) {

    'use strict';

    return View.extend({
        vtype: 'pane',

        views: function () {
            return (this.options.box || null);
        },

        initialize: function () {
            this.$el.addClass( 'pane' );
            View.prototype.initialize.apply( this, arguments );
        },

        updateSize: function (options) {
            var size = options.width || options.height,
                value = size ? size : 'Variable';

            if(options.width || options.height) {
                this.options[ options.width ? 'width' : 'height' ] = size;
                this.options.htmlText = size;
                delete this.options.flex;
            }
            else {
                delete this.options.width;
                delete this.options.height;
                this.options.flex = 1;
                this.options.htmlText = 'Variable';
            }
        }

    });

});
