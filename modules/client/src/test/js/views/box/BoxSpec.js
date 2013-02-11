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

define(['views/box/Box', 'views/panes/Pane'], function(Box, Pane) {

    describe('Box', function() {

        var view;

        beforeEach(function() {
            view = new Box({
                panes: [
                    { vtype: 'pane', height: '200px' },
                    { vtype: 'pane' }
                ]
            });
        });

        afterEach(function () {
            view.remove();
        });

        it('renders two panes', function () {
            view.render();
            expect(view.$el.children('.pane').length).to.be(2);
        });

        it('binds to sizeChange event on two panes', function () {
            var spy = sinon.spy(view, 'listenTo');
            view.render();
            expect(spy.calledWith(view.firstPane, 'sizeChange')).to.be.ok();
            expect(spy.calledWith(view.secondPane, 'sizeChange')).to.be.ok();
        });

        it('calls splitter method', function () {
            var spy = sinon.spy(view.$el, 'splitter');
            view.render();
            expect(spy.calledOnce).to.be.ok();
        });
    });

});
