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
    'views/View',
    'views/panes/Pane',
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
        
        // must be set when extending this class
        sizingProperty: null,

        views: function () {
            return this.options.panes;
        },

        afterRender: function () {
            this.firstPane = this.views[0];
            this.secondPane = this.views[1];

            this.listenTo( this.firstPane, 'sizeChange', _.bind(this.firstPaneSizeChanged, this) );
            this.listenTo( this.secondPane, 'sizeChange', _.bind(this.secondPaneSizeChanged, this) );

            this.initSplitter();

            return this;
        },

        initSplitter: function () {
            this.$el.splitter( _.extend({}, this.options, { orientation: this.orientation }) );
        },

        updateLayout: function (evt) {
            evt.stopPropagation();
            
            var firstPaneOptions = this.firstPane.options,
                prop = this.sizingProperty;

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
            var size = parseFloat( otherPaneSize ),
                options = {},
                prop = this.sizingProperty;

            if( isPercentageSize( otherPaneSize ) ) {
                options[ prop ] = (100 - size) + '%';
                pane.updateSize( options );
            }
            else {
                pane.updateSize( options );
            }
            this.initSplitter();
        },

        secondPaneSizeChanged: function (size) {
            var options = {},
                prop = this.sizingProperty;

            options[prop] = size;
            this.secondPane.updateSize( options );
            this.updatePane( this.firstPane, size );
        },

        firstPaneSizeChanged: function (size) {
            var options = {},
                prop = this.sizingProperty;

            options[prop] = size;
            this.firstPane.updateSize( options );
            this.updatePane( this.secondPane, size );
        }

    });

});
