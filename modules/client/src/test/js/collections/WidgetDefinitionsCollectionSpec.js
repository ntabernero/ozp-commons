/*
 * Copyright 2013 Next Century Corporation 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(['models/WidgetDefinitionModel', 'collections/WidgetDefinitionsCollection'], function(WidgetDefinitionModel, WidgetDefinitionsCollection) {
    describe('WidgetDefinitionsCollectionSpec', function() {
    
        beforeEach(function(done) {
            this.collection = new WidgetDefinitionsCollection();
            this.widget1 = new WidgetDefinitionModel({id: '1', displayName: 'Apple'});
            this.widget2 = new WidgetDefinitionModel({id: '2', displayName: 'Chestnut'});
            
            this.server = sinon.fakeServer.create();
            done();
        });
        
        afterEach(function(done) {
            this.server.restore();
            
            done();
        });
        
        it('creates a collection', function () {
            var wc = new WidgetDefinitionsCollection();
            expect(wc).to.be.an('object');
        });
    
        it('can sort by displayName.', function () {
            
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
        
        it('generates a base url for an empty collection.', function () {
            expect(this.collection.url).to.eql('/ozp/rest/owf/widget-defs');
        });
        
        it('generates a url for model in collection with an id.', function () {
            this.collection.add(this.widget1)
            expect(this.collection.at(0).get('displayName')).to.eql('Apple');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/widget-defs/1');
        });
        
        it("creates a POST request to the correct url for a save", function() {
            this.collection.create({displayName: 'test widget'});
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/widget-defs");
        });
        
        it("creates a GET request to the correct url for a fetch", function() {
            this.collection.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/widget-defs");
        });
        
        it("creates a PUT request to the correct url for bulk updates", function() {
            this.collection.add([this.widget1, this.widget2]);
            this.collection.sync('update', this.collection);
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/widget-defs");
            expect(JSON.parse(this.server.requests[0].requestBody).length).to.eql(2);
        });
        
        it("creates a PUT request to the correct URL for a model update.", function() {
            this.collection.add(this.widget1);
            this.collection.at(0).save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/widget-defs/1");
            expect(JSON.parse(this.server.requests[0].requestBody).displayName).to.eql('Apple');
        });
    });
});
