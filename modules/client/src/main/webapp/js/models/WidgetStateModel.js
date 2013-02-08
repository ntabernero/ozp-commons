/*
 * Copyright 2013 Next Century Corporation 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    'models/Model',
    'jquery'
],

function(Model, $) {

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
        },

        idAttribute: 'uniqueId',

        //widget state models are not saved to the server directly
        sync: $.noop
    });

    return WidgetStateModel;

});
