/*global define, window */
define("plugin", ['require', 'jquery'], function(require, $) {

    /*  
        Internal map for all plugins that have been installed and uninstalled.
        Each map object has two properties, loaded(boolean) and state.
        {
            loaded: false
            state: ...
        }
    */
    var plugins = {};

    /**
     * @description installs plugin javascript
     * @param {String[]} pluginNames Array of plugin names to be installed
     * @returns {Object} Return a Promise object. When resolved, done callbacks are passed an array of plugin objects.
     */
    function install(pluginNames) {

        var deferred = $.Deferred();

        pluginNames = [].concat(pluginNames);

        //loop through plugins putting an entry in our plugin map
        for (var i = 0; i < pluginNames.length; i++) {
            var pluginName = pluginNames[i];
            if (!plugins[pluginName]) {
                plugins[pluginName] = {};
            }

            //mark unloaded until the plugin is actually installed
            plugins[pluginName].loaded = false;
        }

        require(pluginNames, function() {
            var args = arguments;

            //loop through arguments which are the actual plugin objs
            for (var i = 0; i < args.length; i++) {
                var pluginName = pluginNames[i];
                var plugin = args[i];

                //if there have seen this plugin before and we have saved state for it
                //execute setState
                if (plugin) {
                    if (plugin.setState && plugins[pluginName] && plugins[pluginName].state !== undefined) {
                        plugin.setState(plugins[pluginName].state);
                    }

                    //mark plugin loaded
                    plugins[pluginName].loaded = true;
                }
            }

            //resolve deferred with an array of plugin objects
            deferred.resolve.apply(deferred, args);
        },
        function(err) {
            var args = arguments;

            //The errback, error callback
            //The error has a list of modules that failed
            //err.requireModules && err.requireModules[0];
            if (err.requireModules && err.requireModules.length > 0) {
                $.each(err.requireModules, function(i, name) {

                    // RequireJS holds on to listeners in case the
                    // module will be attempted to be reloaded
                    // using a different config.
                    // This is unwanted behavior for us.
                    // Calling undef twice removes the listeners that RequireJS holds on to.
                    requirejs.undef(name);
                    requirejs.undef(name);

                });
            }

            //reject the deferred pass err obj back
            deferred.reject(err);
        });

        return deferred.promise();
    }

    /**
     * @description uninstalls plugin javascript
     * @param name name of plugin to uninstall
     * @returns {Object} Return a Promise object.
     */
    function uninstall(name) {

        var deferred = $.Deferred();

        //check first if this plugin was loaded
        if (plugins[name] && plugins[name].loaded) {
            //first get the plugin to be unloaded
            require([name], function(plugin) {

                //if the plugin has a getState function save the state
                if (plugin.getState) {
                    plugins[name].state = plugin.getState();
                }

                //if the plugin has an unload function, execute it.
                if (plugin.unload) {
                    plugin.unload();
                }

                //mark plugin unloaded
                plugins[name].loaded = false;

                //use requirejs to unload
                requirejs.undef(name);

                deferred.resolve();

            },
            function(err) {
                //The errback, error callback
                //The error has a list of modules that failed
                //err.requireModules && err.requireModules[0];
                if (err.requireModules && err.requireModules.length > 0) {
                    $.each(err.requireModules, function(i, name) {
                        requirejs.undef(name);
                    });
                }

                //mark plugin unloaded
                plugins[name].loaded = false;

                //reject the deferred pass err obj back
                deferred.reject(err);
            });
        }
        // plugin isn't installed.
        else {
            deferred.resolve();
        }

        return deferred.promise();
    }

    function getPlugins() {
        return plugins;
    }

    return {
        install: install,
        uninstall: uninstall,

        //matches requirejs function names
        require: install,
        undef: uninstall,

        getPlugins: getPlugins
    };
});
