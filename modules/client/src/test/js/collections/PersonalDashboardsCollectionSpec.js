define(['models/PersonalDashboardModel', 'collections/PersonalDashboardsCollection'], function(PersonalDashboardModel, PersonalDashboardsCollection) {
    describe('PersonalDashboardsCollectionSpec', function() {
    
        beforeEach(function(done) {
            this.collection = new PersonalDashboardsCollection();
            this.server = sinon.fakeServer.create();
            this.server.respondWith(
                "GET",
                "/people/1/dashboards",
                [
                    200,
                    {"Content-Type": "application/json"},
                    '{"response":{ \
                        "guid": "12345", \
                        "name": "Test Dashboard", \
                        "description": "This is a test dashboard", \
                        "layoutConfig": "{widgets: []}", \
                        "alteredByAdmin": false, \
                        "isdefault": true, \
                        "dashboardPosition": 0, \
                        "removed": false, \
                        "groups": [], \
                        "isGroupDashboard": false, \
                        "createdDate": "Jan 1 2013 00:00:00", \
                        "createdBy": 1, \
                        "editedDate": "Jan 1 2013 12:00:00", \
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
    
        it('Test PersonalDashboardsCollection creation.', function () {
            var pdc = new PersonalDashboardsCollection();
            expect(pdc).to.be.an('object');
        });
        
        it('Test PersonalDashboardsCollection url for an empty collection.', function () {
            expect(this.collection.url()).to.eql('/people/dashboards');
        });
        
        it('Test PersonalDashboardsCollection url for an empty collection with person set', function () {
            this.collection.setPerson(1);
            expect(this.collection.url()).to.eql('/people/1/dashboards');
        });
        
        it('Test PersonalDashboardsCollection url for model in collection with no guid.', function () {
            this.collection.setPerson(1);
            this.collection.add({name: 'test dashboard', person: 1})
            expect(this.collection.at(0).get('name')).to.eql('test dashboard');
            expect(this.collection.at(0).url()).to.eql('/people/1/dashboards');
        });
        
        it('Test PersonalDashboardsCollection url for model in collection with no guid.', function () {
            this.collection.setPerson(1);
            this.collection.add({name: 'test dashboard', guid: '12345', person: 1})
            expect(this.collection.at(0).get('name')).to.eql('test dashboard');
            expect(this.collection.at(0).url()).to.eql('/people/1/dashboards/12345');
        });
        
        it("Test PesonalDashboardsCollection should make the correct fetch", function() {
            this.collection.setPerson(1);
            this.collection.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/people/1/dashboards");
        });
        
    });
});
