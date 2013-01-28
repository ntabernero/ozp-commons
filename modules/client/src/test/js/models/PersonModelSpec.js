define(['models/PersonModel'], function(PersonModel) {
    describe('PersonModelSpec', function() {
    
        beforeEach(function(done) {
            this.person = new PersonModel({
                "username": "Sally",
                "fullname": "Sally Tester",
                "email": "sally@test.server",
                "lastLogin": "1/1/2013 01:00:00",
                "prevLogin": "1/1/2013 00:00:00"
            });
            this.server = sinon.fakeServer.create();
            
            done();
        });
    
        it('Test PersonModel creation.', function () {
            expect(this.person).to.be.an('object');
            expect(this.person.get('username')).to.eql('Sally');
            expect(this.person.get('fullname')).to.eql('Sally Tester');
            expect(this.person.get('email')).to.eql('sally@test.server');
            expect(this.person.get('lastLogin')).to.eql('1/1/2013 01:00:00');
            expect(this.person.get('prevLogin')).to.eql('1/1/2013 00:00:00');
        });
    
        it('Test PersonModel base url', function() {
            this.person.set("id", 1);
            expect(this.person.url()).to.eql("/ozp/rest/owf/persons/1");
        });
    
        it('Test PersonModel test create url.', function() {
            this.person.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons");
            expect(this.person.url()).to.eql("/ozp/rest/owf/persons");
        });
        
        it('Test PersonModel test fetch url', function() {
            this.person.set('id', '1');
            this.person.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons/1");
            expect(this.person.url()).to.eql("/ozp/rest/owf/persons/1");
        });
        
        it('Test PersonModel test update url', function() {
            this.person.set('id', '1');
            this.person.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons/1");
            expect(this.person.url()).to.eql("/ozp/rest/owf/persons/1");
        });
        
        it('Test PersonModel test delete url', function() {
            this.person.set('id', 1);
            this.person.destroy();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("DELETE");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/persons/1");
            expect(this.person.url()).to.eql("/ozp/rest/owf/persons/1");
        });
    });
});
