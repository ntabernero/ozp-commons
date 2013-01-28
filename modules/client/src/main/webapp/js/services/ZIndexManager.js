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

        this.views = [];

        ZBASE += INCREMENT_BY;
    }

    ZIndexManager.prototype.refreshIndices = function() {
        var index = this.zBase;

        _.each(this.views, function(view) {
            view.$el.css('z-index', index);
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

        this.refreshIndices();
    };

    ZIndexManager.prototype.unregister = function(view, options) {
        this.views = _.without(this.views, view);
        view.off('destroy.' + this._className);

        if (!(options && options.silent)) this.refreshIndices();
    };

    ZIndexManager.prototype.bringToFront = function(view) {
        this.views = _.without(this.views, view);
        this.views.push(view);
        this.refreshIndices();
    };

    ZIndexManager.prototype.destroy = function() {
        var me = this;

        _.each(this.views, function(view) {
           me.unregister(view, {silent: true}); 
        });
    };

    return ZIndexManager;

});
