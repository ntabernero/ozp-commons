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

    var ViewModel = Backbone.Model.extend((function() {

        //static id Generator variable
        var idGen = 0;

        return {
            parse: function(view) {
                var id;

                //each model needs an id.
                //if it has a dom id, use that.
                //Otherwise generate one and attach 
                //it to the dom el
                if (view.$el[0].id) {
                    id = view.$el[0].id;
                }
                else {
                    id = 'z-index-managed-' + idGen;
                    idGen++;

                    view.$el[0].id = id;
                }

                return {
                    id: id,
                    $el: view.$el
                };
            }
        };
    }()));

    var ViewCollection = Backbone.Collection.extend({
        model: ViewModel
    });

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

        this.views = new ViewCollection();

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
        var me = this,
            model = new ViewModel(view, {parse: true});

        view.on('destroy.' + this._className, _.bind(this.unregister, this));

        if (options && options.activate) {
            this.views.push(model);
        }
        else {
            this.views.unshift(model);
        }
    };

    ZIndexManager.prototype.unregister = function(view) {
        this.views.remove(new ViewModel(view, {parse: true}));
        view.off('destroy.' + this._className);
    };

    ZIndexManager.prototype.bringToFront = function(view) {
        var model = new ViewModel(view, {parse: true});

        this.views.remove(model, {silent: true});
        this.views.push(model);
    };

    return ZIndexManager;

});
