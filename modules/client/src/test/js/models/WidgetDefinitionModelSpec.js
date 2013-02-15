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

define(['models/WidgetDefinitionModel'], function(WidgetDefinitionModel) {
    describe('WidgetDefinitionModelSpec', function() {
    
        beforeEach(function(done) {
            this.widget = new WidgetDefinitionModel({
                "guid": "11111",
                "displayName": "Widget One",
                "widgetUrl": "widget.html",
                "imageUrlLarge": "img/widget.png",
                "imageUrlSmall": "img/widgetSm.png",
                "widgetType": "admin",
                
                "universalName": "org.widgets.widgetone",
                "description": "This is a sample Widget.",
                "descriptorUrl": null,
                "version": "1.0",
                
                "height": 200,
                "width": 200,
                "background": false,
                "singleton": false,
                "visibleForLaunch": true,
                
                "originalName": "Widget One",
                "sendableIntents": null,
                "receivableIntents": null,
                "tags": "" 
            });
            this.server = sinon.fakeServer.create();
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('should generate a base url with id', function() {
            this.widget.set("id", 1);
            expect(this.widget.url()).to.eql("/widget-defs/1");
        });
        
        it('should create a basic model', function () {
            expect(this.widget).to.be.an('object');
            expect(this.widget.get('guid')).to.eql('11111');
            expect(this.widget.get('displayName')).to.eql('Widget One');
            expect(this.widget.get('universalName')).to.eql('org.widgets.widgetone');
        });
    
        it('Test WidgetDefinitionModel test create url.', function() {
            this.widget.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/widget-defs");
            expect(this.widget.url()).to.eql("/widget-defs");
        });
        
        it('Test WidgetDefinitionModel test fetch url', function() {
            this.widget.set('id', '1');
            this.widget.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/widget-defs/1");
            expect(this.widget.url()).to.eql("/widget-defs/1");
        });
        
        it('Test WidgetDefinitionModel test update url', function() {
            this.widget.set('id', '1');
            this.widget.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/widget-defs/1");
            expect(this.widget.url()).to.eql("/widget-defs/1");
        });
        
        it('Test WidgetDefinitionModel test delete url', function() {
            this.widget.set('id', 1);
            this.widget.destroy();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("DELETE");
            expect(this.server.requests[0].url).to.eql("/widget-defs/1");
            expect(this.widget.url()).to.eql("/widget-defs/1");
        });
    });
});
