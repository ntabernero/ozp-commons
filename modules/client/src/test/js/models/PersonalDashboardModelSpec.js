define(['models/PersonalDashboardModel'], function(PersonalDashboardModel) {
    describe('PersonalDashboardModelSpec', function() {
    
        beforeEach(function(done) {
            this.dashboard = new PersonalDashboardModel({
                name: "Test Dashboard",
                description: "This is a test Dashboard",
                person: 1
            });
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test PersonalDashboardModel creation.', function () {
            var p1 =  new PersonalDashboardModel({person: 'bob', guid: 'xxx-xxx-xxx'});
            
            expect(p1).to.be.an('object');
            expect(p1.get('person')).to.eql('bob');
            expect(p1.get('guid')).to.eql('xxx-xxx-xxx');
            expect(p1.get('name')).to.eql(null);
        });
    
        it('Test PersonalDashboardModel base url', function() {
            var collection = {
                url: '/people/dashboards'
            }
            this.dashboard.collection = collection;
            expect(this.dashboard.url()).to.eql("/people/1/dashboards");
            
        });
    });
});
