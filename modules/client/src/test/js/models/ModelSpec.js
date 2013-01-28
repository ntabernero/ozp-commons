define(['models/Model'], function(Model) {

    describe('ModelSpec', function() {
    
        it('Test Model creation.', function () {
            var model = new Model();
            expect(model).to.be.an('object');
        });
    
    });
    return {};
});
