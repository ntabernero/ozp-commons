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

define(['models/StackModel'], function(StackModel) {
    describe('StackModelSpec', function() {
    
        beforeEach(function(done) {
            this.stack = new StackModel({
                "name": "Stack One",
                "description": "This is a test stack.",
                "urlName": "stack-one",
                "descriptorUrl": "/descriptors/stackOne.html"
            });
            this.server = sinon.fakeServer.create();
            
            // Stub test initialization method;  And any custom pre-test elements here.
            done();
        });
    
        it('Test StackModel base url', function() {
            this.stack.set("id", 1);
            expect(this.stack.url()).to.eql("/ozp/rest/owf/stacks/1");
        });
        
        it('Test StackModel creation.', function () {
            expect(this.stack).to.be.an('object');
            expect(this.stack.get('name')).to.eql('Stack One');
            expect(this.stack.get('urlName')).to.eql('stack-one');
        });
    
        it('Test StackModel test create url.', function() {
            this.stack.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("POST");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks");
            expect(this.stack.url()).to.eql("/ozp/rest/owf/stacks");
        });
        
        it('Test StackModel test fetch url', function() {
            this.stack.set('id', '1');
            this.stack.fetch();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("GET");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks/1");
            expect(this.stack.url()).to.eql("/ozp/rest/owf/stacks/1");
        });
        
        it('Test StackModel test update url', function() {
            this.stack.set('id', '1');
            this.stack.save();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("PUT");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks/1");
            expect(this.stack.url()).to.eql("/ozp/rest/owf/stacks/1");
        });
        
        it('Test StackModel test delete url', function() {
            this.stack.set('id', 1);
            this.stack.destroy();
            expect(this.server.requests.length).to.eql(1);
            expect(this.server.requests[0].method).to.eql("DELETE");
            expect(this.server.requests[0].url).to.eql("/ozp/rest/owf/stacks/1");
            expect(this.stack.url()).to.eql("/ozp/rest/owf/stacks/1");
        });
    });
});
