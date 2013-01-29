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

define(['events/EventBus'], function(EventBus) {

    describe('EventBus', function() {

        it('should be a singleton.', function() {
            expect(EventBus).to.be.an('object');
        });

        it('should have on, off and trigger methods.', function () {
            expect(EventBus).to.have.property('on');
            expect(EventBus).to.have.property('off');
            expect(EventBus).to.have.property('trigger');
        });
    });
    
});
