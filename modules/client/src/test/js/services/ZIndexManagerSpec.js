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

        it('should be a class.', function() {
            expect(ZIndexManager).to.be.an('function');
        });

        it('should increment z-index base for next instance by 10000.', function() {
            var zIndexManager2 = new ZIndexManager();
            expect(zIndexManager2.zBase).to.equal(zIndexManager.zBase + 10000);
        });

        it('should add a view to the bottom of the stack when registered without options.', function() {
            var spy = sinon.spy();

            zIndexManager.register(view1);
            zIndexManager.register(view2);

            expect(view2.$el.css('z-index')).to.be.lessThan(view1.$el.css('z-index'));
        });

        it('should add a view to the top of the stack when registered with "activate".', function() {
            var spy = sinon.spy();

            zIndexManager.register(view1);
            zIndexManager.register(view2, {activate: true});

            expect(view2.$el.css('z-index')).to.be.greaterThan(view1.$el.css('z-index'));
        });


        it('should increment z-index by 4 for next view.', function() {
            var spy = sinon.spy();
            var spy2 = sinon.spy();

            debugger;

            zIndexManager.register(view1, {activate: true});
            zIndexManager.register(view2, {activate: true});
            var zIndex1 = parseInt(view1.$el.css('z-index'));
            var zIndex2 = parseInt(view2.$el.css('z-index'));

            expect(zIndex2).to.equal(zIndex1 + 4);
        });

    });
    
});
