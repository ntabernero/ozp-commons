define([
    'views/View',
    './Pane',
    'jquery',
    'lodash',
    'jquery-splitter'
], function (View, Pane, $, _) {
    
    'use strict';

    var percentageUnitsRegex = /^\d+(\.\d+)?%$/i,
        isPercentageSize = function (size) {
            return size && percentageUnitsRegex.test(size);
        };

    return View.extend({
        vtype: 'box',
        
        className: 'box',

        events: {
            'layoutChange': 'updateLayout'
        },

        views: function () {
            return this.options.panes;
        },

        initialize: function () {
            if( !this.options.orientation ) {
                this.options.orientation = 'vertical';
            }

            this.$el.addClass( this.options.orientation && this.options.orientation === 'vertical' ? 'hbox' : 'vbox');
            View.prototype.initialize.apply(this, arguments);
        },

        afterRender: function () {
            this.firstPane = this.views[0];
            this.secondPane = this.views[1];

            this.$el.splitter( this.options );

            return this;
        },

        getSizingProperty: function () {
            return this.options.orientation === 'vertical' ? 'width' : 'height';
        },

        updateLayout: function (evt) {
            evt.stopPropagation();
            
            var firstPaneOptions = this.firstPane.options,
                prop = this.getSizingProperty();

            if( firstPaneOptions.flex ) {
                this.secondPaneSizeChanged( this.firstPane.$el[prop]() + 'px' );
            }
            else if( isPercentageSize( firstPaneOptions[prop] ) ) {
                var newSize = Math.round( (this.firstPane.$el[prop]() / this.$el[prop]()) * 100 ) + '%';
                this.firstPaneSizeChanged( newSize );
            }
            else {
                this.firstPaneSizeChanged( this.firstPane.$el[prop]() + 'px' );
            }
        },

        updatePane: function (pane, otherPaneSize) {
            console.log(pane.$el, otherPaneSize);
            var size = parseFloat( otherPaneSize ),
                options = {},
                prop = this.getSizingProperty();

            if( isPercentageSize( otherPaneSize ) ) {
                options[ prop ] = (100 - size) + '%';
                pane.updateSize( options );
            }
            else {
                pane.updateSize( options );
            }
            this.$el.splitter( this.options );
        },

        secondPaneSizeChanged: function (size) {
            var options = {},
                prop = this.getSizingProperty();

            options[prop] = size;
            this.secondPane.updateSize( options );
            this.updatePane( this.firstPane, size );
        },

        firstPaneSizeChanged: function (size) {
            var options = {},
                prop = this.getSizingProperty();

            options[prop] = size;
            this.firstPane.updateSize( options );
            this.updatePane( this.secondPane, size );
        }

    });

});
