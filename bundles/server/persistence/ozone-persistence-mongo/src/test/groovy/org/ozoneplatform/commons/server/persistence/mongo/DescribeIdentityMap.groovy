/* 
   Copyright 2013 Next Century Corporation 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

package org.ozoneplatform.commons.server.persistence.mongo

import org.ozoneplatform.commons.server.domain.model.Entity
import spock.lang.Specification

class DescribeIdentityMap extends Specification {

    IdentityMap identityMap

    def setup() {
        identityMap = new IdentityMapImpl()
    }

    def "it retrieves existing entities based on their unique ID"() {
        given: "an entity has been registered"
        def entity = new TestEntity(id: UUID.randomUUID().toString())
        identityMap.register(entity)
        identityMap.register(entity)

        expect: "it can be retrieved by ID"
        entity.is(identityMap.retrieve(entity.id))
    }

    def "it returns null when asked to retrieve an entity that has not yet been registered"() {
        given: "an entity which has not been registered"
        def entity = new TestEntity(id: UUID.randomUUID().toString())

        expect: "map returns null"
        identityMap.retrieve(entity.id) == null
    }

    class TestEntity extends Entity {

    }
}
