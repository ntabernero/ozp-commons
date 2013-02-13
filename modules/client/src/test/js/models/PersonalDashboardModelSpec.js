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

define(['models/PersonalDashboardModel'], function(PersonalDashboardModel) {
    describe('PersonalDashboardModelSpec', function() {
    
        beforeEach(function(done) {
            this.dashboard = new PersonalDashboardModel({
                name: "Test Dashboard",
                description: "This is a test Dashboard",
                person: 1
            });
            this.server = sinon.fakeServer.create();
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
//        it('Test PersonalDashboardModel base url', function() {
//            expect(this.dashboard.url()).to.eql("/people/1/dashboards");
//        });
//        
//        it('Test PersonalDashboardModel creation.', function () {
//            var p1 =  new PersonalDashboardModel({person: 'bob', guid: 'xxx-xxx-xxx'});
//            
//            expect(p1).to.be.an('object');
//            expect(p1.get('person')).to.eql('bob');
//            expect(p1.get('guid')).to.eql('xxx-xxx-xxx');
//            expect(p1.get('name')).to.eql(null);
//        });
//    
//        it('Test PersonalDashboardModel test create url.', function() {
//            this.dashboard.save();
//            expect(this.server.requests.length).to.eql(1);
//            expect(this.server.requests[0].method).to.eql("POST");
//            expect(this.server.requests[0].url).to.eql("/people/1/dashboards");
//            expect(this.dashboard.url()).to.eql("/people/1/dashboards");
//        });
//        
//        it('Test PersonalDashboardModel test fetch url', function() {
//            this.dashboard.set('guid', '12345');
//            this.dashboard.fetch();
//            expect(this.server.requests.length).to.eql(1);
//            expect(this.server.requests[0].method).to.eql("GET");
//            expect(this.server.requests[0].url).to.eql("/people/1/dashboards/12345");
//            expect(this.dashboard.url()).to.eql("/people/1/dashboards/12345");
//        });
//        
//        it('Test PersonalDashboardModel test update url', function() {
//            this.dashboard.set('guid', '12345');
//            this.dashboard.save();
//            expect(this.server.requests.length).to.eql(1);
//            expect(this.server.requests[0].method).to.eql("PUT");
//            expect(this.server.requests[0].url).to.eql("/people/1/dashboards/12345");
//            expect(this.dashboard.url()).to.eql("/people/1/dashboards/12345");
//        });
//        
//        it('Test PersonalDashboardModel test delete url', function() {
//            this.dashboard.set('guid', '12345');
//            this.dashboard.destroy();
//            expect(this.server.requests.length).to.eql(1);
//            expect(this.server.requests[0].method).to.eql("DELETE");
//            expect(this.server.requests[0].url).to.eql("/people/1/dashboards/12345");
//            expect(this.dashboard.url()).to.eql("/people/1/dashboards/12345");
//        });
        it('Test PersonalDashboardModel base url', function() {
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/personal-dashboards");
        });
        
        it('Test PersonalDashboardModel creation.', function () {
            var p1 =  new PersonalDashboardModel({person: 'bob', id: 'xxx-xxx-xxx'});
            
            expect(p1).to.be.an('object');
            expect(p1.get('person')).to.eql('bob');
            expect(p1.get('id')).to.eql('xxx-xxx-xxx');
            expect(p1.get('name')).to.eql(null);
        });
    
        it('Test PersonalDashboardModel test create url.', function() {
            this.dashboard.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/personal-dashboards");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/personal-dashboards");
        });
        
        it('Test PersonalDashboardModel test fetch url', function() {
            this.dashboard.set('id', '12345');
            this.dashboard.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/personal-dashboards/12345");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/personal-dashboards/12345");
        });
        
        it('Test PersonalDashboardModel test update url', function() {
            this.dashboard.set('id', '12345');
            this.dashboard.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/personal-dashboards/12345");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/personal-dashboards/12345");
        });
        
        it('Test PersonalDashboardModel test delete url', function() {
            this.dashboard.set('id', '12345');
            this.dashboard.destroy();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("DELETE");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/personal-dashboards/12345");
            expect(this.dashboard.url()).to.eql("/ozp/rest/owf/personal-dashboards/12345");
        });
        
        
    });
});
