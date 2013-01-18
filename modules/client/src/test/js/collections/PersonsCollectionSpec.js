define(['models/PersonModel', 'collections/PersonsCollection'], function(PersonModel, PersonsCollection) {
    describe('PersonsCollectionSpec', function() {
    
        beforeEach(function(done) {
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test PersonsCollection creation.', function () {
            var pc = new PersonsCollection();
            expect(pc).to.be.an('object');
        });
    
        it('Test PersonsCollection sorting.', function () {
            
            var p1 = new PersonModel({personName: 'Bob', personRealName: 'Bob'});
            var p2 = new PersonModel({personName: 'Charlie', personRealName: 'Charlie'});
            var p3 = new PersonModel({personName: 'Abe', personRealName: 'Abe'});
            var pc = new PersonsCollection();
            
            // Add the models to the collection.
            pc.add(p1);
            pc.add(p2);
            pc.add(p3);
            
            // Verify their order.
            expect(pc).to.be.an('object');
            expect(pc.at(0).get('personName')).to.eql('Abe');
            expect(pc.at(1).get('personName')).to.eql('Bob');
            expect(pc.at(2).get('personName')).to.eql('Charlie');
        });
    });
});
