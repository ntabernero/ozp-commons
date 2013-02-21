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

/**
 * A mixin for views that are bound to a particular collection.
 * Automatically adds and removes views when they are added and removed
 * from the collection
 */
define([
    'lodash'
], function(_) {
    'use strict';

    return {
        renderCollection: function(options) {
            var $body = options.$body,
                viewFactory = options.viewFactory,
                collection = options.collection,
                viewMap = {};

            function add(widget) {
                var view = viewFactory(widget);

                $body.append(view.render().$el);
                viewMap[widget.cid] = view;
            }

            function remove(widget) {
                var view = viewMap[widget.cid];

                if (view) {
                    view.remove();
                }
            }

            //when a model is added to the collection,
            //add a view
            collection.on('add', add);

            //when a model is removed from the collection,
            //remove the view
            collection.on('remove', remove);

            //add initial collection contents
            collection.each(add);
        }
    };
});
