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

define(['models/PreferenceModel'], function(PreferenceModel) {
    describe('PreferenceModel', function() {
        var preference, GUID = '111-11111111-1111111111';

        beforeEach(function(done) {
            preference = new PreferenceModel({
                "name": "testName",
                "namespace": "testNamespace",
                "value": "testValue"
            });
            
            done();
        });

        afterEach(function(done) {
            preference = null;

            done();
        });
    
        it('has default null values for name, namespace, value, and scope', function() {
            var pref = new PreferenceModel();

            expect(pref.get('name')).to.be(null);
            expect(pref.get('namespace')).to.be(null);
            expect(pref.get('scope')).to.be(null);
            expect(pref.get('scopeGuid')).to.be(null);
            expect(pref.get('value')).to.be(null);
        });

        it('creates a URL like preferences/namespace/name when there is no scope or scopeGuid', function() {
            expect(preference.url()).to.be('preferences/testNamespace/testName');
        });

        it('creates a URL like groups/preferences/namespace/name when scope = group', function() {
            preference.set('scope', 'group');
            expect(preference.url()).to.be('groups/preferences/testNamespace/testName');
        });

        it('creates a URL like groups/guid/preferences/namespace/name when scope = group' + 
                'and scopeGuid is set', function() {
            preference.set('scope', 'group');
            preference.set('scopeGuid', GUID);
            expect(preference.url()).to.be('groups/' + GUID + 
                '/preferences/testNamespace/testName');
        });

        it('creates a URL like persons/preferences/namespace/name when scope = person', function() {
            preference.set('scope', 'person');
            expect(preference.url()).to.be('persons/preferences/testNamespace/testName');
        });

        it('creates a URL like persons/guid/preferences/namespace/name when scope = group' + 
                'and scopeGuid is set', function() {
            preference.set('scope', 'person');
            preference.set('scopeGuid', GUID);
            expect(preference.url()).to.be('persons/' + GUID + 
                '/preferences/testNamespace/testName');
        });
    });
});
