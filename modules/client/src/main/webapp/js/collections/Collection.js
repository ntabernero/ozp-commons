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
    'backbone'
],

function(Backbone) {
    'use strict';
    
    var Collection = Backbone.Collection.extend({

        /**
         * Reorders the collection so that the 
         * specified model is at the specified index.
         * Relative ordering of all other models is preserved.
         * In the case where the model being moved was previously
         * at a lower index, the element that was at the newIndex
         * will end up before the model being moved.
         *
         * @param model The model to move
         * @param newIndex The desired index of the model
         * @fires reorder (model, newIndex) Upon completion
         */
        updateIndex: function(model, newIndex) {
            if (!this.contains(model)) {
                return;
            }

            this.remove(model, {silent: true});
            this.add(model, {at: newIndex, silent: true});

            this.trigger('reorder', model, newIndex);
        }
    });
    
    return Collection;
});
