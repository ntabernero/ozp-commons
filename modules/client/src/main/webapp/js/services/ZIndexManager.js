define([
    'jquery'
],

function( $ ) {

    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }
    
    var INCREMENT_BY = 10000,
        ZBASE = INCREMENT_BY,
        IDSTR = '_zIndexManager-id',
        ACTIVATED = 'activate',
        DEACTIVATED = 'deactivate',
        $doc = $(document);

    function ZIndexManager() {

        var me = this;
        
        this.zBase = ZBASE;
        this.front = null;
        this._className = 'z-index-managed-' + this.zBase;

        ZBASE += INCREMENT_BY;
    }

    ZIndexManager.prototype.destroy = function($el) {
        this.front = null;
        $doc.off('.' + this._className);
    };

    ZIndexManager.prototype._incrementZIndex = function(view) {
        view.$el.css('z-index', this.zBase);
        this.zBase += 4;
    };

    ZIndexManager.prototype.register = function(view, options) {
        var me = this;

        view.$el.addClass(this._className);
        view.$el.on('mousedown.' + this._className, function() {
            me.bringToFront(view);
        });

        options && options.activate && me.bringToFront(view);
    };

    ZIndexManager.prototype.unregister = function(view) {
        view.$el.removeClass(this._className);
        view.off('.' + this._className);
    };

    ZIndexManager.prototype.bringToFront = function(view) {
        var oldFront = this.front;

        if(oldFront) {
            if(oldFront === view) {
                return;
            }
            else {
                oldFront.$el.removeClass('active');
                oldFront.trigger(DEACTIVATED);
            }
        }

        this.front = view;
        this.front.$el.addClass('active');
        this._incrementZIndex(this.front);

        this.front.trigger(ACTIVATED);
    };

    return ZIndexManager;

});
