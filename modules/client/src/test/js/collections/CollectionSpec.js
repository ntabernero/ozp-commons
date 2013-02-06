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
    'collections/Collection'
], function(Collection) {
    var collection,
        model1,
        model2;

    beforeEach(function(done) {
        collection = new Collection();

        model1 = new Backbone.Model();
        model2 = new Backbone.Model();

        collection.add([model1, model2]);
        done();
    });

    afterEach(function(done) {
        done();
    });

    it('moves a model up to the new specified index', function() {
        collection.updateIndex(model1, 1);

        expect(collection.at(0)).to.be(model2);
        expect(collection.at(1)).to.be(model1);
    });

    it('moves a model down to the new specified index', function() {
        collection.updateIndex(model2, 0);

        expect(collection.at(0)).to.be(model2);
        expect(collection.at(1)).to.be(model1);
    });

    it('fires reorder when updateIndex is called', function() {
        var callback = sinon.spy();

        collection.on('reorder', callback);

        collection.updateIndex(model1, 1);

        expect(callback.calledWith(model1, 1)).to.be.ok();
    });

    it('does not modify the collection or fire events if updateIndex ' +
            'is called on a model that is not in the collection', function() {

        var callback = sinon.spy();

        collection.on('reorder', callback);

        collection.updateIndex(new Backbone.Model(), 1);

        expect(callback.called).to.equal(false);
        expect(collection.length).to.equal(2);
        expect(collection.at(0)).to.be(model1);
        expect(collection.at(1)).to.be(model2);
    });
});
