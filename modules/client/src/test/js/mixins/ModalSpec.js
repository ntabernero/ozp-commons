define(['mixins/Modal', 'backbone', 'lodash'], function(Modal, Backbone, _) {

    describe('Modal', function() {

        var View = Backbone.View.extend(
            _.extend({}, Modal, {
            })
        );

        it('should be a singleton.', function() {
            expect(Modal).to.be.an('object');
        });

        it('should add `modal hide` classes to a view', function() {
            var view = new View();
            expect(view.$el.hasClass('modal')).to.be.ok();
            expect(view.$el.hasClass('hide')).to.be.ok();
        });

        it('should add `modal hide fade` classes to a view if option animate is set to true.', function() {
            var view = new View({ animate: true });
            expect(view.$el.hasClass('modal')).to.be.ok();
            expect(view.$el.hasClass('hide')).to.be.ok();
            expect(view.$el.hasClass('hide')).to.be.ok();

            view.remove();
        });

        it('should trigger `show` and  `shown` events when calling show method.', function() {
            var view = new View({});
            var showSpy = sinon.spy();
            var shownSpy = sinon.spy();

            view.on({
                show: showSpy,
                shown: shownSpy
            });

            view.show();
            view.remove();
            expect(showSpy.calledOnce).to.be.ok();
            expect(shownSpy.calledOnce).to.be.ok();

            // TODO: requires bootstrap css
            // var view = new View({ animate:true });
            // view.$el.css('height', 500);
            // $('body').append(view.render().el);

            // var showSpy = sinon.spy();
            // var shownSpy = sinon.spy();

            // view.on({
            //     show: showSpy,
            //     shown: shownSpy
            // });

            // view.show().then(function() {
            //     expect(showSpy.calledOnce).to.be.ok();
            //     expect(shownSpy.calledOnce).to.be.ok();
            //     done();
            // });
        });

        it('should trigger `hide` and  `hidden` events when calling show method.', function(done) {
            var view = new View({});
            var hideSpy = sinon.spy();
            var hiddenSpy = sinon.spy();

            view.on({
                hide: hideSpy,
                hidden: hiddenSpy
            });

            view.show().then(function () {
                view.hide();
                expect(hideSpy.calledOnce).to.be.ok();
                expect(hiddenSpy.calledOnce).to.be.ok();view.hide();
                view.remove();
                done();
            })

            // TODO: requires bootstrap css
            // var view = new View({ animate:true });
            // view.$el.css('height', 500);
            // $('body').append(view.render().el);

            // var showSpy = sinon.spy();
            // var shownSpy = sinon.spy();

            // view.on({
            //     show: showSpy,
            //     shown: shownSpy
            // });

            // view.show().then(function() {
            //     expect(showSpy.calledOnce).to.be.ok();
            //     expect(shownSpy.calledOnce).to.be.ok();
            //     done();
            // });
        });

    });
    
});
