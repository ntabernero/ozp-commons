define(['services/ZIndexManager', 'backbone'], function(ZIndexManager) {

    describe('ZIndexManager', function() {
        
        var view1, view2, zIndexManager;

        beforeEach(function() {
            view1 = new Backbone.View();
            view2 = new Backbone.View();
            zIndexManager = new ZIndexManager();

            view1.render();
            view2.render();
        });

        afterEach(function() {
            view1.remove();
            view2.remove();
            view1 = view2 = null;
            
            zIndexManager = null;
        });

        it('is a class.', function() {
            expect(ZIndexManager).to.be.an('function');
        });

        it('increments z-index base for next instance by 10000.', function() {
            var zIndexManager2 = new ZIndexManager();
            expect(zIndexManager2.zBase).to.equal(zIndexManager.zBase + 10000);
        });

        it('adds a view to the bottom of the stack when registered without options.', function() {
            var spy = sinon.spy();

            zIndexManager.register(view1);
            zIndexManager.register(view2);

            expect(view2.$el.css('z-index')).to.be.lessThan(view1.$el.css('z-index'));
        });

        it('adds a view to the top of the stack when registered with "activate".', function() {
            zIndexManager.register(view1);
            zIndexManager.register(view2, {activate: true});

            expect(view2.$el.css('z-index')).to.be.greaterThan(view1.$el.css('z-index'));
        });

        it('gives the max z-index to the front view', function() {
            zIndexManager.register(view1);
            zIndexManager.register(view2);

            zIndexManager.bringToFront(view2);

            expect(view2.$el.css('z-index')).to.be.greaterThan(view1.$el.css('z-index'));
        });

        it('increments z-index by 4 for next view.', function() {
            zIndexManager.register(view1, {activate: true});
            zIndexManager.register(view2, {activate: true});
            var zIndex1 = parseInt(view1.$el.css('z-index'), 10);
            var zIndex2 = parseInt(view2.$el.css('z-index'), 10);

            expect(zIndex2).to.equal(zIndex1 + 4);
        });

        it('automatically unregisters destroyed views', function() {
            var unregSpy = sinon.spy(zIndexManager, 'unregister');

            zIndexManager.register(view1);
            view1.remove();

            expect(unregSpy.calledOnce);
        });

        it('does not throw an exception when unregistering a non-registered view', function() {
            zIndexManager.unregister(view1);
        });

        it('tracks a single reference to each registered view', function() {
            zIndexManager.register(view1, {activate: true});
            zIndexManager.register(view2, {activate: true});
            
            for (var i = 0; i < 10; i++) {
                zIndexManager.bringToFront(view1);
                zIndexManager.bringToFront(view2);
            }

            var els = _.map(zIndexManager.views.toJSON(), function(model) {
                return model.$el;
            });

            expect(zIndexManager.views.length).to.equal(2);
            expect(els).to.contain(view1.$el);
            expect(els).to.contain(view2.$el);
        });
    });
    
});
