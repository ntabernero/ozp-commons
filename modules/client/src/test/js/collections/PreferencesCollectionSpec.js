define(['models/PreferenceModel', 'collections/PreferencesCollection'], function(PreferenceModel, PreferencesCollection) {
    describe('PreferencesCollectionSpec', function() {
    
        beforeEach(function(done) {
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test PreferencesCollection creation.', function () {
            var pc = new PreferencesCollection();
            expect(pc).to.be.an('object');
        });
    
        it('Test PreferencesCollection sorting.', function () {
            
            var p1 = new PreferenceModel({namespace: 'org.test', name: 'b', value: '1'});
            var p2 = new PreferenceModel({namespace: 'org.test', name: 'c', value: '2'});
            var p3 = new PreferenceModel({namespace: 'org.test', name: 'a', value: '3'});
            var p4 = new PreferenceModel({namespace: 'org.earlytest', name: 'early', value: '3'});
            var pc = new PreferencesCollection();
            
            // Add the models to the collection.
            pc.add(p1);
            pc.add(p2);
            pc.add(p3);
            pc.add(p4);
            
            // Verify their order.
            expect(pc).to.be.an('object');
            expect(pc.at(0).get('name')).to.eql('early');
            expect(pc.at(1).get('name')).to.eql('a');
            expect(pc.at(2).get('name')).to.eql('b');
            expect(pc.at(3).get('name')).to.eql('c');
        });
    });
});
