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

    var PreferenceModel = Model.extend({
        defaults: {
            "name": null,
            "namespace": null,
            "value": null,
            "scope": null, 
            "scopeGuid": null
        },

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
         */
        url: function() {
            var urlSegments = [],
                scope = this.get('scope'),
                guid = this.get('scopeGuid'),
                namespace = this.get('namespace'),
                name = this.get('name');

            if (scope) {
                urlSegments.push(scope + 's');

                if (scope !== 'system' && guid) {
                    urlSegments.push(guid);
                }
            }

            urlSegments.push('preferences');

            if (namespace) {
                urlSegments.push(namespace);
                if (name) {
                    urlSegments.push(name);
                }
            }

            return _.map(urlSegments, function(seg) { 
                return encodeURIComponent(seg); 
            }).join('/');
        }   
    });

    return PreferenceModel;
});
