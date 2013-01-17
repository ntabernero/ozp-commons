define(['models/Model'], function(Model) {

    describe('ModelSpec', function() {
   
        beforeEach(function(done) {
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test Model creation.', function () {
            var model = new Model();
            expect(model).to.be.an('object');
        });
    
    });
    return {};
});
