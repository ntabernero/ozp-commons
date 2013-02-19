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

import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.persistence.mongo.mappers.DocumentMapperRegistry
import org.ozoneplatform.commons.server.persistence.mongo.mappers.DocumentMapperRegistryImpl
import spock.lang.Specification

class DescribeDocumentMapperRegistry extends Specification {

    DocumentMapperRegistry registry

    def setup() {
        registry = new DocumentMapperRegistryImpl()
    }

    def "it resolves document mappers by mongo type"() {
        expect:
        registry.getMapperForMongoType('Person') != null
    }

    def "it resolves document mappers by entity type"() {
        expect:
        registry.getMapperForEntityType(Person.class) != null
    }
}
