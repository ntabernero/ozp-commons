define(['views/View'], function(View) {

    describe('View', function() {

        beforeEach(function(done) {
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });

        it('should instantiate.', function () {
            var view = new View();
            
            expect(view).to.be.an('object');
        });
    
        it('should have show and hide methods.', function () {
            var view = new View();

            expect(view.show).to.be.a('function');
            expect(view.hide).to.be.a('function');
        });

        it('should fire "show" event when executing show method.', function () {
            var view = new View(),
                spy = sinon.spy();

            view.on('show', spy);
            view.show();

            expect(spy.calledOnce).to.be.ok();
        });

        it('should fire "hide" event when executing hide method.', function () {
            var view = new View(),
                spy = sinon.spy();

            view.on('hide', spy);
            view.hide();

            expect(spy.calledOnce).to.be.ok();
        });

        it('should return a promise for when executing show and hide methods.', function () {
            var view = new View();

            expect(view.show()).to.not.have.property('resolve');
            expect(view.show()).to.have.property('then');

            expect(view.hide()).to.not.have.property('resolve');
            expect(view.hide()).to.have.property('then');
        });
    
    });

});
