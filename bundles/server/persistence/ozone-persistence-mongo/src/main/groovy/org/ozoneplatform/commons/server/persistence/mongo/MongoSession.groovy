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

import com.mongodb.DBCollection
import org.ozoneplatform.commons.server.persistence.mongo.mappers.DocumentMapperRegistry

class MongoSession {

    final IdentityMap identityMap
    final DBCollection db
    final UnitOfWork unitOfWork
    final DocumentMapperRegistry mapperRegistry


    public MongoSession(
            DBCollection dbCollection,
            IdentityMap identityMap,
            UnitOfWork unitOfWork,
            DocumentMapperRegistry mapperRegistry) {
        this.db = dbCollection
        this.identityMap = identityMap
        this.unitOfWork = unitOfWork
        this.mapperRegistry = mapperRegistry
    }

    def find() {
        def documents = db.find()
        mapQueriedDocumentsToEntities(documents)
    }

    def find(def query) {
        def documents = db.find(query)
        mapQueriedDocumentsToEntities(documents)
    }

    def add(def entity) {
        unitOfWork.registerNew(entity)
    }

    def remove(def entity) {
        unitOfWork.registerRemoved(entity)
    }

    private def mapQueriedDocumentsToEntities(def documents) {
        def entities = documents.collect {
            def entity = identityMap.retrieve(it._id)
            if (!entity) {
                def mapper = mapperRegistry.getMapperForMongoType(it.type)
                entity = mapper.fromDocument(it)
                identityMap.register(entity)
            }
            entity
        }
    }
}
