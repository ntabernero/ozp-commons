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
    'models/Model'
],

function(Model) {
    'use strict';
    
    var DashboardModel = Model.extend({

        idAttribute: "id",
        
        defaults: {
            "name": null,
            "description": null,
            "position": 0,
            "created": null,
            "lastModified": null,
            "createdBy": null,
            "lastModifiedBy": null,
            "lastAccessed": null,
            "dashboardTemplate": null,
            "layoutConfig": null,
            "isDefault": false,
            "isLocked": false,
            "floatingWidgets": null // a JSON array representing a WidgetStatesCollection
        }

    });

    return DashboardModel;

});

