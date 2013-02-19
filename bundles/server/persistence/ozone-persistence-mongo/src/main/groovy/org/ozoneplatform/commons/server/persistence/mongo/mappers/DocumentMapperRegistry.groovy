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

package org.ozoneplatform.commons.server.persistence.mongo.mappers

import org.ozoneplatform.commons.server.domain.model.Person

interface DocumentMapperRegistry {

    DocumentMapper getMapperForEntityType(Class entityType);

    DocumentMapper getMapperForMongoType(String mongoType);
}

class DocumentMapperRegistryImpl implements DocumentMapperRegistry {

    static def mappers = [
            new PersonMapper()
    ]

    static def mongoTypeMap
    static def entityTypeMap

    static {
        mongoTypeMap = new LinkedHashMap<String, DocumentMapper>()
        entityTypeMap = new LinkedHashMap<Class, DocumentMapper>()
        mappers.each {
            mongoTypeMap.put(it.mongoType, it)
            entityTypeMap.put(it.entityType, it)
        }
    }

    @Override
    DocumentMapper getMapperForEntityType(Class entityType) {
        entityTypeMap[entityType]
    }

    @Override
    DocumentMapper getMapperForMongoType(String mongoType) {
        mongoTypeMap[mongoType]
    }
}
