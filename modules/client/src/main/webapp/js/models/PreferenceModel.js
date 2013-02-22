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
    'backbone',
    'lodash'
],

function(Model, Backbone, _) {
    'use strict';
    
    var PreferenceModel = Model.extend({
        defaults: {
            "name": null,
            "namespace": null,
            "value": null
        },

        //the scope and scopeGuid on which to
        //save or look for this preference.  I am
        //making these traditional properties and not model
        //attrs because the server does not return their value
        //in its response.
        scope: null,
        scopeGuid: null,

        /**
         * create a URL for preferences with the specified owner scope, owner guid,
         * namespace, and name.
         *
         * Preference URLs work as follows.  
         *
         * groups/<group-guid>/preferences/<namespace>/<name>
         *  A specific preference attached to a specific group
         *
         * persons/<person-guid>/preferences/<namespace>/<name>
         *  A specific preference attached to a specific user
         *
         * persons/preferences/<namespace>/<name>
         *  A specific preference attached to the current user
         *
         * groups/preferences/<namespace>/<name>
         *  A specific preference attached to any group of which the current user is a member.
         *  Read-only
         *
         * preferences/<namespace>/<name>
         *  A hierarchical lookup of the specified preference.  The preference is first
         *  searched for on the current user, then in groups that user is a member of (excluding
         *  "OWF Users") and finally in the "OWF Users" group.
         *
         *  Preferences may be created by POSTing to persons/<person-guid>/preferences
         *  or groups/<group-guid>/preferences
         */
        url: function() {
            var urlSegments = [],
                scope = this.scope,
                guid = this.scopeGuid,
                namespace = this.get('namespace'),
                name = this.get('name');

            if (scope) {
                urlSegments.push(scope + 's');

                if (guid) {
                    urlSegments.push(guid);
                }
            }

            urlSegments.push('preferences');

            return _.map(urlSegments, function(seg) { 
                return encodeURIComponent(seg); 
            }).join('/');
        },

        /**
         * Custom sync method that handles the way that
         * preferences URLs are created
         */
        sync: function(method, model, options) {
            var namespace = model.get('namespace'),
                name = model.get('name');

            options = options || {};

            if (!(namespace && name)) {
                throw "PreferenceModel does not have necessary attributes to communicate with server";
            }

            //save preferences to person by default
            if (!model.scope && method === 'create' || method === 'update') {
                model.scope = 'person';
            }

            //default to current user if saving preference
            if (model.scope === 'person' && !model.guid) {
                model.scopeGuid = 'me';
            }

            //namespace and name are part of the URL for referencing existing
            //prefs.  But for create/update, the URL ends at 'preferences' and
            //the namespace and name are passed in the JSON
            if (!(method === 'create' || method === 'update')) {
                options.url = model.url() + '/' + namespace + '/' + name;
            }

            Backbone.sync(method, model, options);
        }
    });

    return PreferenceModel;
});
