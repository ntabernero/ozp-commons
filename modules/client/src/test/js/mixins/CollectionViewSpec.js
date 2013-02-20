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
    'mixins/CollectionView',
    'collections/Collection',
    'views/View',
    'jquery'
], function(CollectionView, Collection, View, $) {
    describe("CollectionView", function() {
        var view, collection,

            model1 = { name: "1" },
            model2 = { name: "2" },
            model3 = { name: "3" },

            viewFactory = function(model) {
                var view = new View();

                view.$el.addClass('child ' + model.get('name'));

                childViews.push(view);

                return view;
            },

            ViewClass = View.extend(_.extend({}, CollectionView, {
                render: function() {
                    var body = $('<div class="body-el">');
            
                    this.$el.append(body);

                    this.renderCollection({
                        $body: body,
                        collection: collection,
                        viewFactory: viewFactory
                    });

                    View.prototype.render.apply(this, arguments);
                }
            })),
            childViews;

        beforeEach(function(done) {
            collection = new Collection([model1, model2]);

            view = new ViewClass();

            childViews = [];

            done();
        });

        afterEach(function(done) {
            collection = null;

            view.remove();
            view = null;

            childViews = null;

            done();
        });

        it('adds a renderCollection method to the view class into which it is mixed', function() {
            expect(view.renderCollection).to.be.a(Function);
        });

        it('renders a view for each model in the collection', function() {
            view.render();

            expect(view.$('.child').length).to.equal(2);

            collection.add(model3);

            expect(view.$('.child').length).to.equal(3);

            expect(view.$('.child.1').length).to.equal(1);
            expect(view.$('.child.2').length).to.equal(1);
            expect(view.$('.child.3').length).to.equal(1);
        });

        it('removes a view when the corresponding model is removed from the collection', function() {
            collection.add(model3);
            view.render();
            collection.remove(collection.where({name: '2'}));

            expect(view.$('.child').length).to.equal(2);

            expect(view.$('.child.1').length).to.equal(1);
            expect(view.$('.child.3').length).to.equal(1);
        });

        it('renders all children to the body element', function() {
            view.render();

            expect(view.$('.child').length).to.equal(view.$('.body-el > .child').length);
        });
    });
});
