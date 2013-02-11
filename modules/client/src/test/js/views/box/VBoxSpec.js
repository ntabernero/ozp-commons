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

define(['views/box/VBox', 'views/panes/Pane'], function(VBox, Pane) {

    describe('VBox', function() {

        var firstPaneFixedBox;

        beforeEach(function() {
            firstPaneFixedBox = new VBox({
                panes: [
                    { vtype: 'pane', height: '200px' },
                    { vtype: 'pane' }
                ]
            });
        });

        afterEach(function () {
            firstPaneFixedBox.remove();
        });

        it('has vtype of hbox', function () {
            expect(VBox.prototype.vtype).to.be('vbox');
        });

        it('has vertical orientation', function () {
            expect(VBox.prototype.orientation).to.be('horizontal');
        });

        it("'s sizingProperty is height", function () {
            expect(VBox.prototype.sizingProperty).to.be('height');
        });


        it('has box and vbox classes', function () {
            expect(firstPaneFixedBox.$el.hasClass('box')).to.be.ok();
            expect(firstPaneFixedBox.$el.hasClass('vbox')).to.be.ok();
        });

        it('handles resizing of panes', function () {
            // first pane fixed
            // ------------------------------------------
            firstPaneFixedBox.render();            
            sinon.stub(firstPaneFixedBox.firstPane.$el, "height").returns(300);
            firstPaneFixedBox.$el.triggerHandler('layoutChange');

            expect(firstPaneFixedBox.firstPane.options.height).to.be('300px');
            expect(firstPaneFixedBox.secondPane.options.height).to.be(undefined);
            expect(firstPaneFixedBox.secondPane.options.flex).to.be(1);



            // last pane fixed
            // ------------------------------------------
            var lastPaneFixedBox = new VBox({
                panes: [
                    { vtype: 'pane', flex: 1 },
                    { vtype: 'pane', height: '200px' }
                ]
            });
            lastPaneFixedBox.render();
            sinon.stub(lastPaneFixedBox.secondPane.$el, "height").returns(300);
            lastPaneFixedBox.$el.triggerHandler('layoutChange');

            expect(lastPaneFixedBox.firstPane.options.height).to.be(undefined);
            expect(lastPaneFixedBox.firstPane.options.flex).to.be(1);
            expect(lastPaneFixedBox.secondPane.options.height).to.be('300px');


            // both panes with % size
            // ------------------------------------------
            var lastPaneFixedBox = new VBox({
                panes: [
                    { vtype: 'pane', height: '50%' },
                    { vtype: 'pane', height: '50%' }
                ]
            });
            lastPaneFixedBox.render();
            sinon.stub(lastPaneFixedBox.firstPane.$el, "height").returns(300);
            sinon.stub(lastPaneFixedBox.$el, "height").returns(1200);
            lastPaneFixedBox.$el.triggerHandler('layoutChange');

            expect(lastPaneFixedBox.firstPane.options.height).to.be('25%');
            expect(lastPaneFixedBox.firstPane.options.flex).to.be(undefined);
            expect(lastPaneFixedBox.secondPane.options.height).to.be('75%');
            expect(lastPaneFixedBox.secondPane.options.flex).to.be(undefined);
        });
    });

});
