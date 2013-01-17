define(['views/View'], function(View) {
    describe('ViewSpec', function() {

        beforeEach(function(done) {
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test base View.  Verify that it has a show and hide method.', function () {
            var view = new View();
            
            expect(view).to.be.an('object');
            expect(view.show).to.be.a('function');
            expect(view.hide).to.be.a('function');
        });
    
    });
});
