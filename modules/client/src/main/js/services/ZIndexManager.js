define([
    'jquery',
    'lodash',
    'backbone'
],

function( $, _, Backbone ) {

    'use strict'; 

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

        //create the views collection, which contains all 
        //managed views in increasing order by z-index
        this.initViews();

        ZBASE += INCREMENT_BY;
    }

    ZIndexManager.prototype.initViews = function() {
        var refresh = _.bind(this.refreshIndices, this);

        this.views = new Backbone.Collection();

        this.views.on({
            add: refresh,
            remove: refresh
        });
    };

    ZIndexManager.prototype.refreshIndices = function() {
        var index = this.zBase;

        this.views.each(function(view) {
            view.get('$el').css('z-index', index);
            index += 4;
        });
    };

    ZIndexManager.prototype.register = function(view, options) {
        var me = this;

        view.on('destroy.' + this._className, _.bind(this.unregister, this));

        if (options && options.activate) {
            this.views.push(view);
        }
        else {
            this.views.unshift(view);
        }
    };

    ZIndexManager.prototype.unregister = function(view) {
        this.views.remove(view);
        view.off('destroy.' + this._className);
    };

    ZIndexManager.prototype.bringToFront = function(view) {
        var model = new Backbone.Model(view);

        this.views.remove(model, {silent: true});
        if (view) this.views.push(view);
    };

    return ZIndexManager;

});
