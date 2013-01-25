define(['models/PreferenceModel'], function(PreferenceModel) {
    describe('PreferenceModelSpec', function() {
    
        beforeEach(function(done) {
            this.preference = new PreferenceModel({
                "name": "sample",
                "namespace": "org.sample",
                "value": "sampleValue"
            });
            this.server = sinon.fakeServer.create();
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test PreferencesModel base url', function() {
            this.preference.set("id", 1);
            expect(this.preference.url()).to.eql("/ozp/rest/owf/preferences/1");
        });
        
        it('Test PreferencesModel creation.', function () {
            expect(this.preference).to.be.an('object');
            expect(this.preference.get('name')).to.eql('sample');
            expect(this.preference.get('namespace')).to.eql('org.sample');
            expect(this.preference.get('value')).to.eql('sampleValue');
        });
    
//        it('Test PreferencesModel test create url.', function() {
//            this.preference.save();
//            expect(this.server.requests.length).to.eql(1);
//            expect(this.server.requests[0].method).to.eql("POST");
//            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/preferences");
//            expect(this.preference.url()).to.eql("/ozp/rest/owf/preferences");
//        });
        
        it('Test PreferencesModel test fetch url', function() {
            this.preference.set('id', '1');
            this.preference.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/preferences/1");
            expect(this.preference.url()).to.eql("/ozp/rest/owf/preferences/1");
        });
        
//        it('Test PreferencesModel test update url', function() {
//            this.preference.set('id', '1');
//            this.preference.save();
//            expect(this.server.requests.length).to.eql(1);
//            expect(this.server.requests[0].method).to.eql("PUT");
//            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/preferences/1");
//            expect(this.preference.url()).to.eql("/ozp/rest/owf/preferences/1");
//        });
        
        it('Test PreferencesModel test delete url', function() {
            this.preference.set('id', 1);
            this.preference.destroy();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("DELETE");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/preferences/1");
            expect(this.preference.url()).to.eql("/ozp/rest/owf/preferences/1");
        });
    });
});
