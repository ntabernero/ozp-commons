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

define(['models/StackModel', 'collections/StacksCollection'], function(StackModel, StacksCollection) {
    describe('StacksCollectionSpec', function() {
      
        beforeEach(function(done) {
            this.collection = new StacksCollection();
            this.stack1 = new StackModel({id: '1', name: 'Stack 1', description: 'This is a sample stack.', urlName: '/stack1', descriptorUrl: '/descriptors/stack1.html'});
            this.stack2 = new StackModel({id: '2', name: 'Stack 2', description: 'This is another sample stack.', urlName: '/stack2', descriptorUrl: '/descriptors/stack2.html'});
            
            this.server = sinon.fakeServer.create();
            done();
        });
        
        afterEach(function(done) {
            this.server.restore();
            
            done();
        });
        
        it('creates a collection', function () {
            var sc = new StacksCollection();
            expect(sc).to.be.an('object');
        });
    
        it('can sort by name.', function () {
            
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
        
        it('generates a base url for an empty collection.', function () {
            expect(this.collection.url).to.eql('/ozp/rest/owf/stacks');
        });
        
        it('generates a url for model in collection with an id.', function () {
            this.collection.add(this.stack1)
            expect(this.collection.at(0).get('name')).to.eql('Stack 1');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/stacks/1');
        });
        
        it("creates a POST request to the correct url for a save", function() {
            this.collection.create({name: 'test stack'});
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks");
        });
        
        it("creates a GET request to the correct url for a fetch", function() {
            this.collection.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks");
        });
        
        it("creates a PUT request to the correct url for bulk updates", function() {
            this.collection.add([this.stack1, this.stack2]);
            this.collection.sync('update', this.collection);
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks");
            expect(JSON.parse(this.server.requests[0].requestBody).length).to.eql(2);
        });
        
        it("creates a PUT request to the correct URL for a model update.", function() {
            this.collection.add(this.stack1);
            this.collection.at(0).save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks/1");
            expect(JSON.parse(this.server.requests[0].requestBody).name).to.eql('Stack 1');
        });
    });
});
