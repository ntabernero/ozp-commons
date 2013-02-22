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

define(['models/PreferenceModel', 'collections/PreferencesCollection'], function(PreferenceModel, PreferencesCollection) {
    describe('PreferencesCollectionSpec', function() {
    
        it('creates a collection', function () {
            var pc = new PreferencesCollection();
            expect(pc).to.be.an('object');
        });
    
        it('can sort by namespace and name', function () {
            
            var p1 = new PreferenceModel({namespace: 'org.test', name: 'b', value: '1'});
            var p2 = new PreferenceModel({namespace: 'org.test', name: 'c', value: '2'});
            var p3 = new PreferenceModel({namespace: 'org.test', name: 'a', value: '3'});
            var p4 = new PreferenceModel({namespace: 'org.earlytest', name: 'early', value: '3'});
            var pc = new PreferencesCollection();
            
            // Add the models to the collection.
            pc.add(p1);
            pc.add(p2);
            pc.add(p3);
            pc.add(p4);
            
            // Verify their order.
            expect(pc).to.be.an('object');
            expect(pc.at(0).get('name')).to.eql('early');
            expect(pc.at(1).get('name')).to.eql('a');
            expect(pc.at(2).get('name')).to.eql('b');
            expect(pc.at(3).get('name')).to.eql('c');
        });
    });
});
