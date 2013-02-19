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
import org.ozoneplatform.commons.server.domain.model.Entity
import org.ozoneplatform.commons.server.persistence.mongo.mappers.DocumentMapperRegistry

/**
 * Pattern: http://martinfowler.com/eaaCatalog/unitOfWork.html
 * Tracks changes to persistent data in a 'unit of work'. The Unit of work
 * batches changes in memory and then commits all inserts, removes, and updates
 * to the database
 */
interface UnitOfWork {

    void registerNew(Entity entity);

    void registerDirty(Entity entity);

    void registerRemoved(Entity entity);

    void commit();
}

class UnitOfWorkImpl implements UnitOfWork {

    DBCollection dbCollection
    DocumentMapperRegistry documentMapperRegistry

    public UnitOfWorkImpl(DBCollection dbCollection, DocumentMapperRegistry documentMapperRegistry) {
        this.dbCollection = dbCollection
        this.documentMapperRegistry = documentMapperRegistry
    }

    def newEnitites = new HashSet()
    def dirtyEntities = new HashSet()
    def removedEntities = new HashSet()

    @Override
    void registerNew(Entity entity) {
        assert !removedEntities.contains(entity)
        assert !dirtyEntities.contains(entity)
        newEnitites.add(entity)
    }

    @Override
    void registerDirty(Entity entity) {
        assert entity.id
        assert !removedEntities.contains(entity)
        if (!dirtyEntities.contains(entity) && !newEnitites.contains(entity))
            dirtyEntities.add(entity)
    }

    @Override
    void registerRemoved(Entity entity) {
        assert entity.id
        if (newEnitites.remove(entity)) return
        dirtyEntities.remove(entity)
        if (!removedEntities.contains(entity))
            removedEntities.add(entity)
    }

    @Override
    void commit() {
        insertNew()
        updateDirty()
        deleteRemoved()
    }

    private void insertNew() {
        def documents = newEnitites.collect {
            def mapper = documentMapperRegistry.getMapperForEntityType(it.class)
            mapper.toInsertDocument(it)
        }
        dbCollection << documents
    }

    private void updateDirty() {
        dirtyEntities.each {
            def mapper = documentMapperRegistry.getMapperForEntityType(it.class)
            def document = mapper.toUpdateDocument(it)
            dbCollection.update([_id: it.id], document)
        }
    }

    private void deleteRemoved() {
        removedEntities.each {
            dbCollection.remove([_id: it.id])
        }
    }
}