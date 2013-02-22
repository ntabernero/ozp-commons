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
    'models/PreferenceModel'
], function(PreferenceModel) {
    describe('PreferenceModel', function() {
        var preference, 
            GUID = '111-11111111-1111111111',
            fakeAJAX;

        beforeEach(function(done) {
            preference = new PreferenceModel({
                "name": "testName",
                "namespace": "testNamespace",
                "value": "testValue"
            });

            fakeAJAX = sinon.useFakeXMLHttpRequest();
            
            done();
        });

        afterEach(function(done) {
            preference = null;

            fakeAJAX.restore();

            done();
        });
    
        it('has default null values for name, namespace, value, and scope', function() {
            var pref = new PreferenceModel();

            expect(pref.get('name')).to.be(null);
            expect(pref.get('namespace')).to.be(null);
            expect(pref.scope).to.be(null);
            expect(pref.scopeGuid).to.be(null);
            expect(pref.get('value')).to.be(null);
        });

        it('saves preferences to persons/me/preferences when there is no scope or scopeGuid', function() {
            fakeAJAX.onCreate = function (xhr) {
                expect(xhr.url).to.be('persons/me/preferences');
            };

            preference.save();

        });
        it('retrieves preferences from preferences/namespace/name whe there is no scope or scopeGuid', function() {
            fakeAJAX.onCreate = function(xhr) {
                expect(xhr.url).to.be('preferences/testNamespace/testName');
            };

            preference.fetch();
        });

        it('saves preferences to persons/guid/preferences when ' +
                'scope = person and scopeGuid is set', function() {
            fakeAJAX.onCreate = function (xhr) {
                expect(xhr.url).to.be('persons/' + GUID + '/preferences');
            };

            preference.scope = 'person';
            preference.scopeGuid = GUID;

            preference.save();

        });
        it('retrieves preferences from person/guid/preferences/namespace/name when ' +
                'scope = person and scopeGuid is set', function() {
            fakeAJAX.onCreate = function (xhr) {
                expect(xhr.url).to.be('persons/' + GUID + 
                    '/preferences/testNamespace/testName');
            };

            preference.scope = 'person';
            preference.scopeGuid = GUID;

            preference.fetch();

        });

        it('saves preferences to persons/guid/preferences when ' +
                'scope = person and scopeGuid is set', function() {
            fakeAJAX.onCreate = function (xhr) {
                expect(xhr.url).to.be('persons/' + GUID + '/preferences');
            };

            preference.scope = 'person';
            preference.scopeGuid = GUID;

            preference.save();

        });
        it('retrieves preferences from person/guid/preferences/namespace/name when ' +
                'scope = person and scopeGuid is set', function() {
            fakeAJAX.onCreate = function (xhr) {
                expect(xhr.url).to.be('persons/' + GUID + 
                    '/preferences/testNamespace/testName');
            };

            preference.scope = 'person';
            preference.scopeGuid = GUID;

            preference.fetch();
        });

        it('throws an exception if save is attempted without specifying the name', function() {
            preference.unset('name');
            expect(preference.save).to.throwException();
        });
        it('throws an exception if save is attempted without specifying the namespace', function() {
            preference.unset('namespace');
            expect(preference.save).to.throwException();
        });

        it('throws an exception if fetch is attempted without specifying the name', function() {
            preference.unset('name');
            expect(preference.fetch).to.throwException();
        });
        it('throws an exception if fetch is attempted without specifying the namespace', function() {
            preference.unset('namespace');
            expect(preference.fetch).to.throwException();
        });

        it('throws an exception if destroy is attempted without specifying the name', function() {
            preference.unset('name');
            expect(preference.destroy).to.throwException();
        });
        it('throws an exception if destroy is attempted without specifying the namespace', function() {
            preference.unset('namespace');
            expect(preference.destroy).to.throwException();
        });

    });
});
