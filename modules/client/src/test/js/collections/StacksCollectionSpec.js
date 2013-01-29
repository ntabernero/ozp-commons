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

define(['models/StackModel', 'collections/StacksCollection'], function(StackModel, StacksCollection) {
    describe('StacksCollectionSpec', function() {
      
        it('Test StacksCollection creation.', function () {
            var sc = new StacksCollection();
            expect(sc).to.be.an('object');
        });
    
        it('Test StacksCollection sorting.', function () {
            
            var s1 = new StackModel({name: 'Bravo'});
            var s2 = new StackModel({name: 'Charlie'});
            var s3 = new StackModel({name: 'Alpha'});
            var sc = new StacksCollection();
            
            // Add the models to the collection.
            sc.add(s1);
            sc.add(s2);
            sc.add(s3);
            
            // Verify their order.
            expect(sc).to.be.an('object');
            expect(sc.at(0).get('name')).to.eql('Alpha');
            expect(sc.at(1).get('name')).to.eql('Bravo');
            expect(sc.at(2).get('name')).to.eql('Charlie');
        });
    });
});
