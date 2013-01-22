define(['events/EventBus'], function(EventBus) {

    describe('EventBus', function() {

        it('should be a singleton.', function() {
            expect(EventBus).to.be.an('object');
        });

        it('should not have on, off and trigger methods.', function () {
            expect(EventBus).to.have.property('on');
            expect(EventBus).to.have.property('off');
            expect(EventBus).to.have.property('trigger');
        });
    });
    
});
