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
    'services/ZIndexManager', 
    'views/View'
], function(ZIndexManager, View) {

    describe('ZIndexManager', function() {
        
        var view1, view2, zIndexManager;

        beforeEach(function() {
            view1 = new View();
            view2 = new View();
            zIndexManager = new ZIndexManager();

            view1.render();
            view2.render();
        });

        afterEach(function() {
            view1.remove();
            view2.remove();
            view1 = view2 = null;
            
            zIndexManager = null;
        });

        it('is a class.', function() {
            expect(ZIndexManager).to.be.an('function');
        });

        it('increments z-index base for next instance by 10000.', function() {
            var zIndexManager2 = new ZIndexManager();
            expect(zIndexManager2.zBase).to.equal(zIndexManager.zBase + 10000);
        });

        it('adds a view to the bottom of the stack when registered without a logicalIndex.', function() {
            var spy = sinon.spy();

            zIndexManager.register(view1, 1);
            zIndexManager.register(view2);

            expect(view2.$el.css('z-index')).to.be.lessThan(view1.$el.css('z-index'));
        });

        it('adds a view to the correct position when it is specified with a logicalIndex.', function() {
            zIndexManager.register(view1, 1);
            zIndexManager.register(view2, 2);

            expect(view2.$el.css('z-index')).to.be.greaterThan(view1.$el.css('z-index'));
        });

        it('gives the max z-index to the front view', function() {
            zIndexManager.register(view1, 2);
            zIndexManager.register(view2, 1);

            zIndexManager.bringToFront(view2);

            expect(view2.$el.css('z-index')).to.be.greaterThan(view1.$el.css('z-index'));
        });

        it('increments z-index by 4 for next view.', function() {
            zIndexManager.register(view1, 1);
            zIndexManager.register(view2, 2);
            var zIndex1 = parseInt(view1.$el.css('z-index'), 10);
            var zIndex2 = parseInt(view2.$el.css('z-index'), 10);

            expect(zIndex2).to.equal(zIndex1 + 4);
        });

        it('automatically unregisters destroyed views', function() {
            var unregSpy = sinon.spy(zIndexManager, 'unregister');

            zIndexManager.register(view1);
            view1.remove();

            expect(unregSpy.calledOnce).to.be.ok();
        });

        it('does not throw an exception when unregistering a non-registered view', function() {
            zIndexManager.unregister(view1);
        });

        it('tracks a single reference to each registered view', function() {
            zIndexManager.register(view1, 1);
            zIndexManager.register(view2, 2);
            
            for (var i = 0; i < 10; i++) {
                zIndexManager.bringToFront(view1);
                zIndexManager.bringToFront(view2);
            }

            expect(zIndexManager.views.length).to.equal(2);
            expect(zIndexManager.views.get(view1.cid).get('view')).to.be(view1);
            expect(zIndexManager.views.get(view2.cid).get('view')).to.be(view2);
        });

        it('removes references to all registered views when destroyed', function() {
            zIndexManager.register(view1, 1);
            zIndexManager.register(view2, 2);

            zIndexManager.destroy();

            expect(zIndexManager.views.length).to.equal(0);
        });

        it('does not change the zindex of views when destroyed', function() {
            zIndexManager.register(view1, 1);
            zIndexManager.register(view2, 2);
            
            var z1 = view1.$el.css('z-index');
            var z2 = view2.$el.css('z-index');

            zIndexManager.destroy();

            expect(view1.$el.css('z-index')).to.equal(z1);
            expect(view2.$el.css('z-index')).to.equal(z2);
        });

        it('returns logical indexes that match the current order of the views', function() {
            zIndexManager.register(view1, 1);
            zIndexManager.register(view2, 2);
            
            expect(zIndexManager.getLogicalIndex(view1)).to.be.
                lessThan(zIndexManager.getLogicalIndex(view2));

            zIndexManager.bringToFront(view1);

            expect(zIndexManager.getLogicalIndex(view2)).to.be.
                lessThan(zIndexManager.getLogicalIndex(view1));
        });
    });
});
