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
