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
