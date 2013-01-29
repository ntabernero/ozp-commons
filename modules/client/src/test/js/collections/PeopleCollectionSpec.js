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

define(['models/PersonModel', 'collections/PeopleCollection'], function(PersonModel, PeopleCollection) {
    describe('PeopleCollectionSpec', function() {
    
        it('Test PeopleCollection creation.', function () {
            var pc = new PeopleCollection();
            expect(pc).to.be.an('object');
        });
    
        it('Test PeopleCollection sorting.', function () {
            
            var p1 = new PersonModel({username: 'Bob', fullname: 'Bob'});
            var p2 = new PersonModel({username: 'Charlie', fullname: 'Charlie'});
            var p3 = new PersonModel({username: 'Abe', fullname: 'Abe'});
            var pc = new PeopleCollection();
            
            // Add the models to the collection.
            pc.add(p1);
            pc.add(p2);
            pc.add(p3);
            
            // Verify their order.
            expect(pc).to.be.an('object');
            expect(pc.at(0).get('fullname')).to.eql('Abe');
            expect(pc.at(1).get('fullname')).to.eql('Bob');
            expect(pc.at(2).get('fullname')).to.eql('Charlie');
        });
    });
});
