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

define(['models/DashboardInstanceModel'], function(DashboardInstanceModel) {
    describe('DashboardInstanceModelSpec', function() {
    
        beforeEach(function(done) {
            this.dashboard = new DashboardInstanceModel({
                name: "Test Dashboard",
                description: "This is a test Dashboard",
                person: 1
            });
            this.server = sinon.fakeServer.create();
            
            done();
        });
    
        it('generates a base url.', function() {
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/dashboard-instances");
        });
    
        it('creates a POST request to the correct url for a save', function() {
            this.dashboard.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-instances");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/dashboard-instances");
        });
        
        it('creates a GET request to the correct url for a fetch', function() {
            this.dashboard.set('id', '12345');
            this.dashboard.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-instances/12345");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/dashboard-instances/12345");
        });
        
        it('creates a PUT request to the correct URL for a model update.', function() {
            this.dashboard.set('id', '12345');
            this.dashboard.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-instances/12345");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/dashboard-instances/12345");
        });
        
        it('creates a DELETE request to the correct URL for a model update.', function() {
            this.dashboard.set('id', '12345');
            this.dashboard.destroy();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("DELETE");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/dashboard-instances/12345");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/dashboard-instances/12345");
        });
        
        
    });
});
