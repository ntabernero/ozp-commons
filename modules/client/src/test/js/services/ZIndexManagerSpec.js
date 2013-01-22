define(['services/ZIndexManager', 'backbone'], function(ZIndexManager) {

    describe('ZIndexManager', function() {
        
        var view1, view2, zIndexManager;

        beforeEach(function() {
            view1 = new Backbone.View();
            view2 = new Backbone.View();
            zIndexManager = new ZIndexManager();
        });

        afterEach(function() {
            view1.remove();
            view2.remove();
            view1 = view2 = null;
            
            zIndexManager.destroy();
            zIndexManager = null;
        });

        it('should be a class.', function() {
            expect(ZIndexManager).to.be.an('function');
        });

        it('should increment z-index base for next instance by 10000.', function() {
            var zIndexManager2 = new ZIndexManager();
            expect(zIndexManager2.zBase).to.equal(zIndexManager.zBase + 10000);
        });

        it('should not activate a view when registered without options.', function() {
            var spy = sinon.spy();
            view1.on('activate', spy);

            zIndexManager.register(view1);

            expect(spy.calledOnce).to.not.be.ok();
        });

        it('should activate a view when registered with option `activate` set to true.', function() {
            var spy = sinon.spy();
            view1 = new Backbone.View();
            view1.on('activate', spy);

            zIndexManager.register(view1, {
                activate: true
            });

            expect(spy.calledOnce).to.be.ok();
        });

        it('should not fire `activate` event when a view is already active', function() {
            var spy = sinon.spy();

            zIndexManager.register(view1, {
                activate: true
            });

            view1.on('activate', spy);
            zIndexManager.bringToFront(view1);

            expect(spy.calledOnce).to.not.be.ok();
        });

        it('should fire `deactivate` event when another view is activated.', function() {
            var spy = sinon.spy();
            var spy2 = sinon.spy();
            zIndexManager.register(view1, {
                activate: true
            });
            view1.on('deactivate', spy);
            view2.on('activate', spy2);
            zIndexManager.bringToFront(view2);

            expect(spy.calledOnce).to.be.ok();
            expect(spy2.calledOnce).to.be.ok();
        });

        it('should increment z-index by 4 for next view.', function() {
            var spy = sinon.spy();
            var spy2 = sinon.spy();

            zIndexManager.register(view1, {activate: true});
            zIndexManager.register(view2, {activate: true});
            var zIndex1 = parseInt(view1.$el.css('z-index'));
            var zIndex2 = parseInt(view2.$el.css('z-index'));

            expect(zIndex2).to.equal(zIndex1 + 4);
        });

    });
    
});
