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

define(['models/PersonalWidgetDefinitionModel', 'collections/PersonalWidgetDefinitionsCollection'], function(PersonalWidgetDefinitionModel, PersonalWidgetDefinitionsCollection) {
    describe('PersonalWidgetDefinitionsCollectionSpec', function() {
    
        it('Test PersonalWidgetDefinitionsCollection creation.', function () {
            var wc = new PersonalWidgetDefinitionsCollection();
            expect(wc).to.be.an('object');
        });
    
        it('Test PersonalWidgetDefinitionsCollection sorting.', function () {
            
            var w1 = new PersonalWidgetDefinitionModel({displayName: 'Apple'});
            var w2 = new PersonalWidgetDefinitionModel({displayName: 'Chestnut'});
            var w3 = new PersonalWidgetDefinitionModel({displayName: 'Banana'});
            var wc = new PersonalWidgetDefinitionsCollection();
            
            // Add the models to the collection.
            wc.add(w1);
            wc.add(w2);
            wc.add(w3);
            
            // Verify their order.
            expect(wc).to.be.an('object');
            expect(wc.at(0).get('displayName')).to.eql('Apple');
            expect(wc.at(1).get('displayName')).to.eql('Banana');
            expect(wc.at(2).get('displayName')).to.eql('Chestnut');
        });
    });
});
