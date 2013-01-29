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

define(['views/Modal', 'backbone', 'lodash'], function(Modal, Backbone, _) {

    describe('Modal', function() {

        var View = Modal.extend({}),
            view;

        beforeEach(function () {
            view = new View();
        });

        afterEach(function () {
            view.remove();
        });

        it('should add `modal hide fade in` classes to a view', function() {
            expect(view.$el.hasClass('modal')).to.be.ok();
            expect(view.$el.hasClass('hide')).to.be.ok();
            expect(view.$el.hasClass('fade')).to.be.ok();
            expect(view.$el.hasClass('in')).to.be.ok();
        });

        it('should add `modal hide` classes to a view if option animate is set to false.', function() {
            var view = new View({ animate: false });
            expect(view.$el.hasClass('modal')).to.be.ok();
            expect(view.$el.hasClass('hide')).to.be.ok();
            view.remove();
        });

        it('should remove a view from DOM if option removeOnClose is set to true.', function() {
            var view = new View({
                animate: false,
                removeOnClose: true
            });

            var spy = sinon.spy(view, 'remove');
            debugger;
            view.show();
            view.hide();

            expect(spy.calledOnce).to.be.ok();
        });

        it('should add a view to body if render is not called.', function() {
            view.show();
            expect( $('body > .modal')[0] ).to.be.ok();
        });

        // TODO: requires Bootstrap css
        // it('should trigger `shown` event when calling show method.', function() {
        //     var shownSpy = sinon.spy();

        //     view.on({
        //         shown: shownSpy
        //     });
        //     view.show();

        //     expect(shownSpy.calledOnce).to.be.ok();
        // });

        // it('should trigger `hidden` event when calling hide method.', function(done) {

        //     var hideSpy = sinon.spy();
        //     var hiddenSpy = sinon.spy();

        //     view.on({
        //         hidden: hiddenSpy
        //     });

        //     view.show().then(function () {
        //         view.hide();
        //         expect(hiddenSpy.calledOnce).to.be.ok();view.hide();
        //         done();
        //     });
        // });

    });
    
});
