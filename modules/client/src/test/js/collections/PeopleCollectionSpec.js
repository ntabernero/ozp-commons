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

define(['models/PersonModel', 'collections/PeopleCollection'], function(PersonModel, PeopleCollection) {
    describe('PeopleCollectionSpec', function() {

        beforeEach(function(done) {
            this.collection = new PeopleCollection();
            this.person1 = new PersonModel({id: '1', name: 'Abe', fullName: 'Abe Tester', email: 'abe@test.server'});
            this.person2 = new PersonModel({id: '2', name: 'Charlie', fullName: 'Charlie Tester', email: 'charlie@test.server'});
            
            this.server = sinon.fakeServer.create();
            done();
        });
        
        afterEach(function(done) {
            this.server.restore();
            
            done();
        });
        
        it('creates a collection', function () {
            var pc = new PeopleCollection();
            expect(pc).to.be.an('object');
        });
        
        it('can sort PersonModels.', function () {
            
            var p1 = new PersonModel({username: 'Bob', fullname: 'Bob'});
            var p2 = new PersonModel({username: 'Charlie', fullname: 'Charlie'});
            var p3 = new PersonModel({username: 'Abe', fullname: 'Abe'});
            var pc = new PeopleCollection();
            
            // Add the models to the collection.
            pc.add(p1);
            pc.add(p2);
            pc.add(p3);
            
            // Verify their order.
            expect(pc).to.be.an('object');
            expect(pc.at(0).get('fullname')).to.eql('Abe');
            expect(pc.at(1).get('fullname')).to.eql('Bob');
            expect(pc.at(2).get('fullname')).to.eql('Charlie');
        });
        
        it('generates a base url for an empty collection.', function () {
            expect(this.collection.url).to.eql('/ozp/rest/owf/persons');
        });
        
        it('generates a url for model in collection with an id.', function () {
            this.collection.add(this.person1)
            expect(this.collection.at(0).get('name')).to.eql('Abe');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/persons/1');
        });
        
        it("creates a POST request to the correct url for a save", function() {
            this.collection.create({name: 'test person'});
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons");
        });
        
        it("creates a GET request to the correct url for a fetch", function() {
            this.collection.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons");
        });
        
        it("creates a PUT request to the correct url for bulk updates", function() {
            this.collection.add([this.person1, this.person2]);
            this.collection.sync('update', this.collection);
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons");
            expect(JSON.parse(this.server.requests[0].requestBody).length).to.eql(2);
        });
        
        it("creates a PUT request to the correct URL for a model update.", function() {
            this.collection.add(this.person1);
            this.collection.at(0).save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons/1");
            expect(JSON.parse(this.server.requests[0].requestBody).name).to.eql('Abe');
        });
    });
});

