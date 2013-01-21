define(['models/PersonalWidgetDefinitionModel', 'collections/PersonalWidgetDefinitionsCollection'], function(PersonalWidgetDefinitionModel, PersonalWidgetDefinitionsCollection) {
    describe('PersonalWidgetDefinitionsCollectionSpec', function() {
    
        beforeEach(function(done) {
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test PersonalWidgetDefinitionsCollection creation.', function () {
            var wc = new PersonalWidgetDefinitionsCollection();
            expect(wc).to.be.an('object');
        });
    
        it('Test PersonalWidgetDefinitionsCollection sorting.', function () {
            
            var w1 = new PersonalWidgetDefinitionModel({displayName: 'Apple'});
            var w2 = new PersonalWidgetDefinitionModel({displayName: 'Chestnut'});
            var w3 = new PersonalWidgetDefinitionModel({displayName: 'Banana'});
            var wc = new PersonalWidgetDefinitionsCollection();
            
            // Add the models to the collection.
            wc.add(w1);
            wc.add(w2);
            wc.add(w3);
            
            // Verify their order.
            expect(wc).to.be.an('object');
            expect(wc.at(0).get('displayName')).to.eql('Apple');
            expect(wc.at(1).get('displayName')).to.eql('Banana');
            expect(wc.at(2).get('displayName')).to.eql('Chestnut');
        });
    });
});
