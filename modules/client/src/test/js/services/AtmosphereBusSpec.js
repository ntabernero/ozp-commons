define(['services/AtmosphereBus'], function(AtmosphereBus) {
	
	describe('AtmosphereBus', function(){
	
		var atmosphereBus,
		    ATMOSPHERE_BUS_TOPIC = "atmosphereBusTestTopic",
		    TEST_DATA = "test";
		
		beforeEach(function(){
			atmosphereBus = new AtmosphereBus("http://localhost:8181/pubsub");
		});
		
		afterEach(function(){
			atmosphereBus = null;
		});
		
		it('is a class.', function(){
			expect(AtmosphereBus).to.be.an('function');
		});
		
		it('it should handle onOpen method', function() {
			expect(atmosphereBus.onOpen).to.be.an('function');
			
			//The tests in this method, can be verified against a running AtmosphereBus
			//in Karaf
			atmosphereBus.onOpen({testdata: TEST_DATA}, function(response, objs){
				//The Objects must get passed to function
				expect(objs.testdata).to.equal(TEST_DATA);
				
				//console.log("response.state: " + response.state + ", response.status: " + response.status);
				//The state must be open
				expect(response.state).to.equal("opening");
				//The status must be 200
				expect(response.status).to.equal(200);
			});
			atmosphereBus.subscribe(ATMOSPHERE_BUS_TOPIC);
		});
		
		it('it should handle onMessage method', function() {
			expect(atmosphereBus.onMessage).to.be.an('function');
		});
		
		
		it('it should handle onClose method', function() {
			expect(atmosphereBus.onClose).to.be.an('function');
		});
		
		it('it should handle onError method', function() {
			expect(atmosphereBus.onError).to.be.an('function');
		});
		
		it('it should have publish method', function() {
			expect(atmosphereBus.publish).to.be.an('function');
		});
		
		it('it should have subscribe method', function() {
			expect(atmosphereBus.subscribe).to.be.an('function');
		});
		
	});
});
