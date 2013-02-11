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

define(['views/box/HBox', 'views/panes/Pane'], function(HBox, Pane) {

    describe('HBox', function() {

        var firstPaneFixedBox;

        beforeEach(function() {
            firstPaneFixedBox = new HBox({
                panes: [
                    { vtype: 'pane', width: '200px' },
                    { vtype: 'pane' }
                ]
            });
        });

        afterEach(function () {
            firstPaneFixedBox.remove();
        });

        it('has vtype of hbox', function () {
            expect(HBox.prototype.vtype).to.be('hbox');
        });

        it('has vertical orientation', function () {
            expect(HBox.prototype.orientation).to.be('vertical');
        });

        it("'s sizingProperty is width", function () {
            expect(HBox.prototype.sizingProperty).to.be('width');
        });

        it('has box and hbox classes', function () {
            expect(firstPaneFixedBox.$el.hasClass('box')).to.be.ok();
            expect(firstPaneFixedBox.$el.hasClass('hbox')).to.be.ok();
        });

        it('handles resizing of panes', function () {
            // first pane fixed
            // ------------------------------------------
            firstPaneFixedBox.render();            
            sinon.stub(firstPaneFixedBox.firstPane.$el, "width").returns(300);
            firstPaneFixedBox.$el.triggerHandler('layoutChange');

            expect(firstPaneFixedBox.firstPane.options.width).to.be('300px');
            expect(firstPaneFixedBox.secondPane.options.width).to.be(undefined);
            expect(firstPaneFixedBox.secondPane.options.flex).to.be(1);



            // last pane fixed
            // ------------------------------------------
            var lastPaneFixedBox = new HBox({
                panes: [
                    { vtype: 'pane', flex: 1 },
                    { vtype: 'pane', width: '200px' }
                ]
            });
            lastPaneFixedBox.render();
            sinon.stub(lastPaneFixedBox.secondPane.$el, "width").returns(300);
            lastPaneFixedBox.$el.triggerHandler('layoutChange');

            expect(lastPaneFixedBox.firstPane.options.width).to.be(undefined);
            expect(lastPaneFixedBox.firstPane.options.flex).to.be(1);
            expect(lastPaneFixedBox.secondPane.options.width).to.be('300px');


            // both panes with % size
            // ------------------------------------------
            var lastPaneFixedBox = new HBox({
                panes: [
                    { vtype: 'pane', width: '50%' },
                    { vtype: 'pane', width: '50%' }
                ]
            });
            lastPaneFixedBox.render();
            sinon.stub(lastPaneFixedBox.firstPane.$el, "width").returns(300);
            sinon.stub(lastPaneFixedBox.$el, "width").returns(1200);
            lastPaneFixedBox.$el.triggerHandler('layoutChange');

            expect(lastPaneFixedBox.firstPane.options.width).to.be('25%');
            expect(lastPaneFixedBox.firstPane.options.flex).to.be(undefined);
            expect(lastPaneFixedBox.secondPane.options.width).to.be('75%');
            expect(lastPaneFixedBox.secondPane.options.flex).to.be(undefined);
        });
    });

});
