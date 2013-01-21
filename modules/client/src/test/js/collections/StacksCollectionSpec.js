define(['models/StackModel', 'collections/StacksCollection'], function(StackModel, StacksCollection) {
    describe('StacksCollectionSpec', function() {
    
        beforeEach(function(done) {
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test StacksCollection creation.', function () {
            var sc = new StacksCollection();
            expect(sc).to.be.an('object');
        });
    
        it('Test StacksCollection sorting.', function () {
            
            var s1 = new StackModel({name: 'Bravo'});
            var s2 = new StackModel({name: 'Charlie'});
            var s3 = new StackModel({name: 'Alpha'});
            var sc = new StacksCollection();
            
            // Add the models to the collection.
            sc.add(s1);
            sc.add(s2);
            sc.add(s3);
            
            // Verify their order.
            expect(sc).to.be.an('object');
            expect(sc.at(0).get('name')).to.eql('Alpha');
            expect(sc.at(1).get('name')).to.eql('Bravo');
            expect(sc.at(2).get('name')).to.eql('Charlie');
        });
    });
});
