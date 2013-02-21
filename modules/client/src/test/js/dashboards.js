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

define([], function() {
    var oldFitPane = {
            "widgets": [
                {
                    "universalName": null,
                    "widgetGuid": "eb5435cf-4021-4f2a-ba69-dde451d12551",
                    "uniqueId": "f25ac11a-8401-4ec3-abd4-7ed5d66423d2",
                    "dashboardGuid": "dba76cba-52b1-4da0-82c5-5a066f6720e7",
                    "paneGuid": "e4894cef-e085-3903-903b-f2a509e6c224",
                    "name": "Channel Shouter3",
                    "active": false,
                    "x": 549,
                    "y": 7,
                    "minimized": false,
                    "maximized": false,
                    "pinned": false,
                    "collapsed": false,
                    "columnPos": 0,
                    "buttonId": null,
                    "buttonOpened": false,
                    "region": "none",
                    "statePosition": 2,
                    "intentConfig": null,
                    "launchData": null,
                    "singleton": false,
                    "floatingWidget": false,
                    "background": false,
                    "zIndex": 19000,
                    "height": 250,
                    "width": 295
                }
            ],
            "height": "100%",
            "items": [
            ],
            "xtype": "fitpane",
            "flex": 1,
            "paneType": "fitpane"
        },
        fitPane = {
            "widgets": [
                {
                    "universalName": null,
                    "widgetGuid": "eb5435cf-4021-4f2a-ba69-dde451d12551",
                    "uniqueId": "f25ac11a-8401-4ec3-abd4-7ed5d66423d2",
                    "dashboardGuid": "dba76cba-52b1-4da0-82c5-5a066f6720e7",
                    "paneGuid": "e4894cef-e085-3903-903b-f2a509e6c224",
                    "name": "Channel Shouter3",
                    "active": false,
                    "x": 549,
                    "y": 7,
                    "minimized": false,
                    "maximized": false,
                    "pinned": false,
                    "collapsed": false,
                    "columnPos": 0,
                    "buttonId": null,
                    "buttonOpened": false,
                    "region": "none",
                    "statePosition": 2,
                    "intentConfig": null,
                    "launchData": null,
                    "singleton": false,
                    "floatingWidget": false,
                    "background": false,
                    "zIndex": 19000,
                    "height": 250,
                    "width": 295
                }
            ],
            "height": "100%",
            "vtype": "fitpane",
            "paneType": "fitpane"
        },
        oldSample = {
            "defaultSettings":{"widgetStates":{"eb5435cf-4021-4f2a-ba69-dde451d12551":{"x":549,"y":7,"height":250,"width":295,"timestamp":1361454345675},"ec5435cf-4021-4f2a-ba69-dde451d12551":{"x":4,"y":5,"height":383,"width":540,"timestamp":1361454345677},"f2f36c27-8102-e0cb-570d-a932a4814f0c":{"x":358,"y":410,"height":654,"width":650,"timestamp":1358192836524},"f05f9aa4-9698-94fd-8168-de29b0cc7936":{"x":616,"y":306,"height":440,"width":540,"timestamp":1358192853049},"2dbd41e4-43a0-f46d-5b8b-a9bcf76b4135":{"x":634,"y":258,"height":400,"width":400,"timestamp":1358192867886}}
            },
            "widgets":[{"universalName":null,"widgetGuid":"eb5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"b6ffe513-39e6-446f-8f52-0fd64ea0642a","dashboardGuid":"7bdbbc4d-a5aa-4fb5-bdf4-ba5c3898566f","paneGuid":"a96da351-aeb7-dd97-a756-f3b6231a5bbd","name":"Channel Shouter","active":false,"x":549,"y":7,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":2,"intentConfig":null,"launchData":null,"singleton":false,"floatingWidget":false,"background":false,"zIndex":19000,"height":250,"width":295},{"universalName":null,"widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"bf3140ad-58fa-461b-804d-82113ed863a8","dashboardGuid":"7bdbbc4d-a5aa-4fb5-bdf4-ba5c3898566f","paneGuid":"a96da351-aeb7-dd97-a756-f3b6231a5bbd","name":"Channel Listener","active":true,"x":4,"y":5,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"intentConfig":null,"launchData":null,"singleton":false,"floatingWidget":false,"background":false,"zIndex":19010,"height":383,"width":540}],
            "height":"100%",
            "items":[],
            "xtype":"desktoppane",
            "flex":1,
            "paneType":"desktoppane"
        },
        desktopPane = {
            vtype: "desktoppane",
            paneType: "desktoppane",
            height: "100%",
            widgets: [{"universalName":null,"widgetGuid":"eb5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"b6ffe513-39e6-446f-8f52-0fd64ea0642a","dashboardGuid":"7bdbbc4d-a5aa-4fb5-bdf4-ba5c3898566f","paneGuid":"a96da351-aeb7-dd97-a756-f3b6231a5bbd","name":"Channel Shouter","active":false,"x":549,"y":7,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":2,"intentConfig":null,"launchData":null,"singleton":false,"floatingWidget":false,"background":false,"zIndex":19000,"height":250,"width":295},{"universalName":null,"widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"bf3140ad-58fa-461b-804d-82113ed863a8","dashboardGuid":"7bdbbc4d-a5aa-4fb5-bdf4-ba5c3898566f","paneGuid":"a96da351-aeb7-dd97-a756-f3b6231a5bbd","name":"Channel Listener","active":true,"x":4,"y":5,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"intentConfig":null,"launchData":null,"singleton":false,"floatingWidget":false,"background":false,"zIndex":19010,"height":383,"width":540}],
            defaultSettings: {"widgetStates":{"eb5435cf-4021-4f2a-ba69-dde451d12551":{"x":549,"y":7,"height":250,"width":295,"timestamp":1361454345675},"ec5435cf-4021-4f2a-ba69-dde451d12551":{"x":4,"y":5,"height":383,"width":540,"timestamp":1361454345677},"f2f36c27-8102-e0cb-570d-a932a4814f0c":{"x":358,"y":410,"height":654,"width":650,"timestamp":1358192836524},"f05f9aa4-9698-94fd-8168-de29b0cc7936":{"x":616,"y":306,"height":440,"width":540,"timestamp":1358192853049},"2dbd41e4-43a0-f46d-5b8b-a9bcf76b4135":{"x":634,"y":258,"height":400,"width":400,"timestamp":1358192867886}}
            }
        },
        oldVBox$$hBoxFitFit$Fit$ = {
            "xtype":"container",
            "layout": {
                "align":"stretch",
                "type":"vbox"
            },
            "height":"100%",
            "cls":"vbox ",
            "items":[
                {
                    "xtype":"container",
                    "layout":{
                        "align":"stretch",
                        "type":"hbox"
                    },
                    "htmlText":"48%",
                    "flex":0.48,
                    "cls":"hbox top",
                    "items":[
                        {
                            "xtype":"fitpane",
                            "flex":1,
                            "paneType":"fitpane",
                            "cls":"left",
                            "htmlText":"50%",
                            "items":[],
                            "defaultSettings":{},
                            "widgets":[{"universalName":"org.owfgoss.owf.examples.NYSE","widgetGuid":"fe137961-039d-e7a5-7050-d6eed7ac4782","uniqueId":"08dd8f6e-f14d-46bf-a5d1-2a73a8934942","dashboardGuid":"cc7d5643-4b42-490b-a5d8-33493e1d6f50","paneGuid":"d0a588aa-19d7-a999-74e1-b163f2e29859","intentConfig":null,"launchData":null,"name":"NYSE Widget","active":true,"x":0,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":428,"width":836}]
                        },
                        {"xtype":"dashboardsplitter"},
                        {
                            "xtype":"fitpane",
                            "paneType":"fitpane",
                            "flex":1,
                            "htmlText":"50%",
                            "items":[],
                            "cls":"right",
                            "defaultSettings":{},
                            "widgets":[{"universalName":"org.owfgoss.owf.examples.HTMLViewer","widgetGuid":"cd5e77f8-cb28-8574-0a8a-a535bd2c7de4","uniqueId":"9ad0ba37-e9b4-4a93-aa03-c01c9f2e2a92","dashboardGuid":"cc7d5643-4b42-490b-a5d8-33493e1d6f50","paneGuid":"eb3f420e-91ad-54e9-cbef-da91ce5b6d84","intentConfig":null,"launchData":null,"name":"HTML Viewer","active":false,"x":840,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":428,"width":836}]
                        }
                    ]
                },
                {"xtype":"dashboardsplitter"},
                {
                    "xtype":"fitpane",
                    "paneType":"fitpane",
                    "flex":0.52,
                    "defaultSettings":{},
                    "cls":"bottom",
                    "htmlText":"52%",
                    "items":[],
                    "widgets":[{"universalName":"org.owfgoss.owf.examples.StockChart","widgetGuid":"92078ac9-6f21-2f5f-6afc-bdc8c915c66d","uniqueId":"7396b072-1c5b-43d1-8cba-c4ecaee93e6b","dashboardGuid":"cc7d5643-4b42-490b-a5d8-33493e1d6f50","paneGuid":"3e6c18dc-f204-404e-030a-5e21bc37e4b6","intentConfig":null,"launchData":null,"name":"Stock Chart","active":false,"x":0,"y":466,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":463,"width":1676}]
                }
            ]
        },
        vBox$$hBoxFitFit$Fit$ = {
            vtype: 'boxpane',
            paneType: 'tabbedpane',
            height: '100%',
            box: {
                vtype: 'vbox',
                paneType: 'tabbedpane',
                panes: [{
                    vtype: 'boxpane',
                    paneType: 'tabbedpane',
                    height: '48%',
                    box: {
                        vtype: 'hbox',
                        paneType: 'tabbedpane',
                        panes: [{
                            vtype: 'fitpane',
                            paneType: 'fitpane',
                            width: '50%',
                            defaultSettings:{},
                            widgets:[{"universalName":"org.owfgoss.owf.examples.NYSE","widgetGuid":"fe137961-039d-e7a5-7050-d6eed7ac4782","uniqueId":"08dd8f6e-f14d-46bf-a5d1-2a73a8934942","dashboardGuid":"cc7d5643-4b42-490b-a5d8-33493e1d6f50","paneGuid":"d0a588aa-19d7-a999-74e1-b163f2e29859","intentConfig":null,"launchData":null,"name":"NYSE Widget","active":true,"x":0,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":428,"width":836}]
                        }, {
                            vtype: 'fitpane',
                            paneType: 'fitpane',
                            width: '50%',
                            defaultSettings:{},
                            widgets:[{"universalName":"org.owfgoss.owf.examples.HTMLViewer","widgetGuid":"cd5e77f8-cb28-8574-0a8a-a535bd2c7de4","uniqueId":"9ad0ba37-e9b4-4a93-aa03-c01c9f2e2a92","dashboardGuid":"cc7d5643-4b42-490b-a5d8-33493e1d6f50","paneGuid":"eb3f420e-91ad-54e9-cbef-da91ce5b6d84","intentConfig":null,"launchData":null,"name":"HTML Viewer","active":false,"x":840,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":428,"width":836}]
                        }]
                    }
                }, {
                    vtype: 'fitpane',
                    paneType: 'fitpane',
                    height: '52%',
                    defaultSettings:{},
                    widgets:[{"universalName":"org.owfgoss.owf.examples.StockChart","widgetGuid":"92078ac9-6f21-2f5f-6afc-bdc8c915c66d","uniqueId":"7396b072-1c5b-43d1-8cba-c4ecaee93e6b","dashboardGuid":"cc7d5643-4b42-490b-a5d8-33493e1d6f50","paneGuid":"3e6c18dc-f204-404e-030a-5e21bc37e4b6","intentConfig":null,"launchData":null,"name":"Stock Chart","active":false,"x":0,"y":466,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":463,"width":1676}]
                }]
            }
        },
        oldConacts = {
            "cls":"hbox ",
            "items":[
                {
                    "defaultSettings":{"widgetStates":{"92448ba5-7f2b-982a-629e-9d621268b5e9":{"timestamp":1361455269246},"302c35c9-9ed8-d0b6-251c-ea1ed4d0c86b":{"timestamp":1361455269252},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1354745224627}}},
                    "widgets":[{"universalName":"org.owfgoss.owf.examples.ContactsManager","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"0d0a3052-96b6-4443-b07a-e6c1b167f573","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":null,"launchData":null,"name":"Contacts Manager","active":false,"x":0,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":287,"width":419},{"universalName":"org.owfgoss.owf.examples.GetDirections","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"5c88def5-ad88-4f9b-aec7-be0cfe66b053","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":{},"launchData":null,"name":"Directions","active":false,"x":0,"y":321,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":2,"singleton":false,"floatingWidget":false,"height":287,"width":419}],
                    "cls":"left",
                    "htmlText":"25%",
                    "items":[],
                    "xtype":"accordionpane",
                    "flex":0.25,
                    "paneType":"accordionpane"
                },
                {"xtype":"dashboardsplitter"},
                {
                    "defaultSettings":{"widgetStates":{"eb81c029-a5b6-4107-885c-5e04b4770767":{"timestamp":1354747222264},"b87c4a3e-aa1e-499e-ba10-510f35388bb6":{"timestamp":1354746772856},"c3f3c8e0-e7aa-41c3-a655-aca3c940f828":{"timestamp":1354746826290},"eb5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684154},"ec5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684155},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1361455269263},"d6ce3375-6e89-45ab-a7be-b6cf3abb0e8c":{"timestamp":1354747222261}}},
                    "widgets":[{"universalName":"org.owfgoss.owf.examples.GoogleMaps","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"394f7dae-2ff3-4e79-80a3-dfde9a7e413d","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"e3058feb-3325-07db-6c04-b9ddfca3d3d4","intentConfig":null,"launchData":null,"name":"Google Maps","active":true,"x":423,"y":62,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":546,"width":1257}],
                    "cls":"right",
                    "htmlText":"75%",
                    "items":[],
                    "xtype":"tabbedpane",
                    "flex":0.75,
                    "paneType":"tabbedpane"
                }
            ],
            "layout":{
                "align":"stretch",
                "type":"hbox"
            },
            "xtype":"container",
            "flex":1
        },
        contacts = {
            vtype: 'boxpane',
            paneType: 'tabbedpane',
            height: '100%',
            box: {
                vtype: 'hbox',
                paneType: 'tabbedpane',
                panes: [{
                    vtype: 'accordionpane',
                    paneType: 'accordionpane',
                    width: '25%',
                    widgets:[{"universalName":"org.owfgoss.owf.examples.ContactsManager","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"0d0a3052-96b6-4443-b07a-e6c1b167f573","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":null,"launchData":null,"name":"Contacts Manager","active":false,"x":0,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":287,"width":419},{"universalName":"org.owfgoss.owf.examples.GetDirections","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"5c88def5-ad88-4f9b-aec7-be0cfe66b053","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":{},"launchData":null,"name":"Directions","active":false,"x":0,"y":321,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":2,"singleton":false,"floatingWidget":false,"height":287,"width":419}],
                    defaultSettings:{"widgetStates":{"92448ba5-7f2b-982a-629e-9d621268b5e9":{"timestamp":1361455269246},"302c35c9-9ed8-d0b6-251c-ea1ed4d0c86b":{"timestamp":1361455269252},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1354745224627}}}
                }, {
                    vtype: 'tabbedpane',
                    paneType: 'tabbedpane',
                    width: '75%',
                    widgets:[{"universalName":"org.owfgoss.owf.examples.GoogleMaps","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"394f7dae-2ff3-4e79-80a3-dfde9a7e413d","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"e3058feb-3325-07db-6c04-b9ddfca3d3d4","intentConfig":null,"launchData":null,"name":"Google Maps","active":true,"x":423,"y":62,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":546,"width":1257}],
                    defaultSettings:{"widgetStates":{"eb81c029-a5b6-4107-885c-5e04b4770767":{"timestamp":1354747222264},"b87c4a3e-aa1e-499e-ba10-510f35388bb6":{"timestamp":1354746772856},"c3f3c8e0-e7aa-41c3-a655-aca3c940f828":{"timestamp":1354746826290},"eb5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684154},"ec5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684155},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1361455269263},"d6ce3375-6e89-45ab-a7be-b6cf3abb0e8c":{"timestamp":1354747222261}}}
                }]
            }
        },
        oldConactsWithBackground = {
            "cls":"hbox ",
            "items":[
                    {
                        "defaultSettings":{"widgetStates":{"92448ba5-7f2b-982a-629e-9d621268b5e9":{"timestamp":1361455269246},"302c35c9-9ed8-d0b6-251c-ea1ed4d0c86b":{"timestamp":1361455269252},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1354745224627}}},
                        "widgets":[{"universalName":"org.owfgoss.owf.examples.ContactsManager","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"0d0a3052-96b6-4443-b07a-e6c1b167f573","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":null,"launchData":null,"name":"Contacts Manager","active":false,"x":0,"y":34,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":287,"width":419, "background": true},{"universalName":"org.owfgoss.owf.examples.GetDirections","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"5c88def5-ad88-4f9b-aec7-be0cfe66b053","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":{},"launchData":null,"name":"Directions","active":false,"x":0,"y":321,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":2,"singleton":false,"floatingWidget":false,"height":287,"width":419}],
                        "cls":"left",
                        "htmlText":"25%",
                        "items":[],
                        "xtype":"accordionpane",
                        "flex":0.25,
                        "paneType":"accordionpane"
                    },
                {"xtype":"dashboardsplitter"},
                {
                    "defaultSettings":{"widgetStates":{"eb81c029-a5b6-4107-885c-5e04b4770767":{"timestamp":1354747222264},"b87c4a3e-aa1e-499e-ba10-510f35388bb6":{"timestamp":1354746772856},"c3f3c8e0-e7aa-41c3-a655-aca3c940f828":{"timestamp":1354746826290},"eb5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684154},"ec5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684155},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1361455269263},"d6ce3375-6e89-45ab-a7be-b6cf3abb0e8c":{"timestamp":1354747222261}}},
                    "widgets":[{"universalName":"org.owfgoss.owf.examples.GoogleMaps","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"394f7dae-2ff3-4e79-80a3-dfde9a7e413d","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"e3058feb-3325-07db-6c04-b9ddfca3d3d4","intentConfig":null,"launchData":null,"name":"Google Maps","active":true,"x":423,"y":62,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":1,"singleton":false,"floatingWidget":false,"height":546,"width":1257, "background": true}],
                    "cls":"right",
                    "htmlText":"75%",
                    "items":[],
                    "xtype":"tabbedpane",
                    "flex":0.75,
                    "paneType":"tabbedpane"
                }
            ],
            "layout":{
                "align":"stretch",
                "type":"hbox"
            },
            "xtype":"container",
            "flex":1
        },
        contactsWithBackground = {
            vtype: 'boxpane',
            paneType: 'tabbedpane',
            height: '100%',
            box: {
                vtype: 'hbox',
                paneType: 'tabbedpane',
                panes: [{
                    vtype: 'accordionpane',
                    paneType: 'accordionpane',
                    width: '25%',
                    widgets:[{"universalName":"org.owfgoss.owf.examples.GetDirections","widgetGuid":"ec5435cf-4021-4f2a-ba69-dde451d12551","uniqueId":"5c88def5-ad88-4f9b-aec7-be0cfe66b053","dashboardGuid":"4bb57740-646b-4e3c-8169-d85d8836bd34","paneGuid":"5562f1af-6247-1b29-2455-5ecae48aa9f7","intentConfig":{},"launchData":null,"name":"Directions","active":false,"x":0,"y":321,"zIndex":0,"minimized":false,"maximized":false,"pinned":false,"collapsed":false,"columnPos":0,"buttonId":null,"buttonOpened":false,"region":"none","statePosition":2,"singleton":false,"floatingWidget":false,"height":287,"width":419}],
                    defaultSettings:{"widgetStates":{"92448ba5-7f2b-982a-629e-9d621268b5e9":{"timestamp":1361455269246},"302c35c9-9ed8-d0b6-251c-ea1ed4d0c86b":{"timestamp":1361455269252},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1354745224627}}}
                }, {
                    vtype: 'tabbedpane',
                    paneType: 'tabbedpane',
                    width: '75%',
                    widgets:[],
                    defaultSettings:{"widgetStates":{"eb81c029-a5b6-4107-885c-5e04b4770767":{"timestamp":1354747222264},"b87c4a3e-aa1e-499e-ba10-510f35388bb6":{"timestamp":1354746772856},"c3f3c8e0-e7aa-41c3-a655-aca3c940f828":{"timestamp":1354746826290},"eb5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684154},"ec5435cf-4021-4f2a-ba69-dde451d12551":{"timestamp":1354746684155},"d182002b-3de2-eb24-77be-95a7d08aa85b":{"timestamp":1361455269263},"d6ce3375-6e89-45ab-a7be-b6cf3abb0e8c":{"timestamp":1354747222261}}}
                }]
            }
        };

    return {
        oldLayoutConfigs: [ oldFitPane, oldSample, oldVBox$$hBoxFitFit$Fit$, oldConacts, oldConactsWithBackground ],
        expectedLayoutConfigs: [ fitPane, desktopPane, vBox$$hBoxFitFit$Fit$, contacts, contactsWithBackground ]
    }
});
