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

    var DashboardModel = Model.extend({

        idAttribute: "guid",

        defaults: {
            "name": null,
            "description": null,
            "layoutConfig": null,
            "alteredByAdmin": false,
            "defaultDashboard": false,
            "dashboardPosition": 0,
            //"removed": false,
            //"groups": [],
            //"isGroupDashboard": false,
            //"createdDate": null,
            //"createdBy": null,
            //"editedDate": null,
            //"stack": null,
            "locked": false
        }

    });

    return DashboardModel;

});

