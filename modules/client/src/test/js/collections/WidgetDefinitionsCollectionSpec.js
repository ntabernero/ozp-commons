define(['models/WidgetDefinitionModel', 'collections/WidgetDefinitionsCollection'], function(WidgetDefinitionModel, WidgetDefinitionsCollection) {
    describe('WidgetDefinitionsCollectionSpec', function() {
    
        beforeEach(function(done) {
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test WidgetDefinitionsCollection creation.', function () {
            var wc = new WidgetDefinitionsCollection();
            expect(wc).to.be.an('object');
        });
    
        it('Test WidgetDefinitionsCollection sorting.', function () {
            
            var w1 = new WidgetDefinitionModel({displayName: 'Apple'});
            var w2 = new WidgetDefinitionModel({displayName: 'Chestnut'});
            var w3 = new WidgetDefinitionModel({displayName: 'Banana'});
            var wc = new WidgetDefinitionsCollection();
            
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
