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

define(['models/DashboardModel', 'collections/GroupDashboardsCollection'], function(DashboardModel, GroupDashboardsCollection) {
    describe('GroupDashboardsCollectionSpec', function() {
    
        beforeEach(function(done) {
            this.collection = new GroupDashboardsCollection();
            this.dashboard1 = new DashboardModel({name: 'test dashboard 1', description: 'A sample dashboard', id: '11111', person: 1})
            this.dashboard2 = new DashboardModel({name: 'test dashboard 2', description: 'Another sample dashboard', id: '22222', person: 1})
            
            this.server = sinon.fakeServer.create();
            this.server.respondWith(
                "GET",
                "/ozp/rest/owf/group-dashboards",
                [
                    200,
                    {"Content-Type": "application/json"},
                    '{"response":{ \
                        "id": "12345", \
                        "name": "Test Dashboard", \
                        "description": "This is a test dashboard", \
                        "layoutConfig": "{widgets: []}", \
                        "alteredByAdmin": false, \
                        "isDefault": true, \
                        "position": 0, \
                        "removed": false, \
                        "groups": [], \
                        "isGroupDashboard": false, \
                        "created": "Jan 1 2013 00:00:00", \
                        "createdBy": 1, \
                        "lastModified": "Jan 1 2013 12:00:00", \
                        "lastAccessed": "Jan 1 2013 12:00:00", \
                        "dashboardTemplate": null, \
                        "stack": null, \
                        "locked": false \
                    }'
                ]
            );
            done();
        });
        
        afterEach(function(done) {
            this.server.restore();
            
            done();
        });
    
        it('Test GroupDashboardsCollection creation.', function () {
            var pdc = new GroupDashboardsCollection();
            expect(pdc).to.be.an('object');
        });
        
        it('Test GroupDashboardsCollection url for an empty collection.', function () {
            expect(this.collection.url).to.eql('/ozp/rest/owf/group-dashboards');
        });
        
        it('Test GroupDashboardsCollection url for an empty collection with person set', function () {
            expect(this.collection.url).to.eql('/ozp/rest/owf/group-dashboards');
        });
        
        it('Test GroupDashboardsCollection url for model in collection with no guid.', function () {
            this.collection.add({name: 'test dashboard', person: 1})
            expect(this.collection.at(0).get('name')).to.eql('test dashboard');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/group-dashboards');
        });
        
        it('Test GroupDashboardsCollection url for model in collection with no guid.', function () {
            this.collection.add({name: 'test dashboard', id: '12345', person: 1})
            expect(this.collection.at(0).get('name')).to.eql('test dashboard');
            expect(this.collection.at(0).url()).to.eql('/ozp/rest/owf/group-dashboards/12345');
        });
        
        it("Test GroupDashboardsCollection should make the correct fetch", function() {
            this.collection.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/group-dashboards");
        });
        
        it("Test GroupDashboardsCollection bulk updates", function() {
            this.collection.add([this.dashboard1, this.dashboard2]);
            this.collection.sync('update', this.collection);
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/group-dashboards");
            expect(JSON.parse(this.server.requests[0].requestBody).length).to.eql(2);
        });
        
        it("Test GroupDashboardsCollection url used by update called on contained dashboard model", function() {
            this.collection.add(this.dashboard1);
            this.collection.at(0).save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/group-dashboards/11111");
            expect(JSON.parse(this.server.requests[0].requestBody).name).to.eql('test dashboard 1');
        });
    });
});
