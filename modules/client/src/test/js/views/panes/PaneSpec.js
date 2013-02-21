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

define(['views/panes/Pane'], function(Pane) {

    describe('Pane', function() {

        var view;

        beforeEach(function() {
            view = new Pane({});
        });

        afterEach(function () {
            view.remove();
        });

        it('has a vtype of pane', function () {
            expect(Pane.prototype.vtype).to.be('pane');
        });

        it('add a pane class to $el', function () {
            expect(view.$el.hasClass('pane')).to.be.ok();
        });

        it('has updateSize method defined', function () {
            expect(view.updateSize).to.be.ok();
        });

        it('updates options when updateSize is called with new options', function () {
            view.updateSize({
                width: 200
            });

            expect(view.options.width).to.be(200);

            view.updateSize({
            });

            expect(view.options.width).to.be(undefined);
            expect(view.options.height).to.be(undefined);
            expect(view.options.flex).to.be(1);
        });
    
    });

});
