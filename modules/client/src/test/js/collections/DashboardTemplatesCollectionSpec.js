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

define(['models/DashboardModel', 'collections/DashboardTemplatesCollection'], function(DashboardModel, DashboardTemplatesCollection) {
    describe('DashboardTemplatesCollectionSpec', function() {
    
        beforeEach(function(done) {
            this.collection = new DashboardTemplatesCollection();
            this.dashboard1 = new DashboardModel({name: 'test dashboard 1', description: 'A sample dashboard', id: '11111', person: 1})
            this.dashboard2 = new DashboardModel({name: 'test dashboard 2', description: 'Another sample dashboard', id: '22222', person: 1})
            
            this.server = sinon.fakeServer.create();
            done();
        });
        
        afterEach(function(done) {
            this.server.restore();
            
            done();
        });
    
        it('creates a DashboardTemplatesCollection.', function () {
            var pdc = new DashboardTemplatesCollection();
            expect(pdc).to.be.an('object');
        });
        
        it('generates a base url for an empty collection.', function () {
            expect(this.collection.url).to.eql('/ozp/rest/owf/dashboard-templates');
        });
        
        it('generates a url for model in collection with no id.', function () {
            this.collection.add({name: 'test dashboard', person: 1})
            expect(this.collection.at(0).get('name')).to.eql('test dashboard');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/dashboard-templates');
        });
        
        it('generates a url for model in collection with an id.', function () {
            this.collection.add({name: 'test dashboard', id: '12345', person: 1})
            expect(this.collection.at(0).get('name')).to.eql('test dashboard');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/dashboard-templates/12345');
        });
        
        it("creates a POST request to the correct url for a save", function() {
            this.collection.create({name: 'test group'});
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-templates");
        });
        
        it("creates a GET request to the correct url for a fetch", function() {
            this.collection.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-templates");
        });
        
        it("creates a PUT request to the correct url for bulk updates", function() {
            this.collection.add([this.dashboard1, this.dashboard2]);
            this.collection.sync('update', this.collection);
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-templates");
            expect(JSON.parse(this.server.requests[0].requestBody).length).to.eql(2);
        });
        
        it("creates a PUT request to the correct URL for a model update.", function() {
            this.collection.add(this.dashboard1);
            this.collection.at(0).save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-templates/11111");
            expect(JSON.parse(this.server.requests[0].requestBody).name).to.eql('test dashboard 1');
        });
    });
});
