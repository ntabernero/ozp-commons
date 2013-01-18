define(['models/PersonModel'], function(PersonModel) {
    describe('PersonModelSpec', function() {
    
        beforeEach(function(done) {
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test PersonModel creation.', function () {
            var p1 =  new PersonModel({username: 'foo', fullname: 'Foo Bar'});
            
            expect(p1).to.be.an('object');
            expect(p1.get('username')).to.eql('foo');
            expect(p1.get('fullname')).to.eql('Foo Bar');
        });
    
    });
});
