define([
    'models/Model'
],

function(Model) {

    var WidgetStateModel = Model.extend({

        defaults: {
            "uniqueId": null,
            "dashboardGuid": null,
            "paneGuid": null,
            "widgetGuid": null,
            "statePosition": 0,
            "name": "",
            "active": false,
            "height": 200,
            "width": 200,
            "x": 0,
            "y": 0,
            "zIndex": 0,
            "minmized": false,
            "maximized": false,
            "pinned": false,
            "collapsed": false,
            "columnPos": 0,
            "columnOrder": 0,
            "buttonId": 0,
            "buttonOpened": true,
            "region": "",
            "singleton": false,
            "floating": false,
            "background": false,
            "intentConfig": "",
            "launchData": ""
        }
    });

    return WidgetStateModel;

});
