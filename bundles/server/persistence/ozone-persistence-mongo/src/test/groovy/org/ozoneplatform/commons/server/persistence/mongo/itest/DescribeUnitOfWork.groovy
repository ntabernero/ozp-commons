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

package org.ozoneplatform.commons.server.persistence.mongo.itest

import com.gmongo.GMongo
import com.mongodb.DBCollection
import org.ozoneplatform.commons.server.domain.model.Entity
import org.ozoneplatform.commons.server.persistence.mongo.UnitOfWork
import org.ozoneplatform.commons.server.persistence.mongo.UnitOfWorkImpl
import org.ozoneplatform.commons.server.persistence.mongo.mappers.DocumentMapper
import org.ozoneplatform.commons.server.persistence.mongo.mappers.DocumentMapperRegistry
import spock.lang.Shared
import spock.lang.Specification

class DescribeUnitOfWork extends Specification {

    @Shared GMongo mongo
    @Shared DBCollection documents
    UnitOfWork unitOfWork

    def setupSpec() {
        mongo = new GMongo()
        documents = mongo.getDB('test').getCollection('ozp-test')
    }

    def setup() {
        def mockDocumentMapperRegistry = Mock(DocumentMapperRegistry)
        mockDocumentMapperRegistry.getMapperForEntityType(_) >> new FakeEntityMapper()
        unitOfWork = new UnitOfWorkImpl(documents, mockDocumentMapperRegistry)
        // Remove all documents
        documents.remove([:])
    }

    def "it inserts new items in the unit of work upon commit"() {
        given: 'new entity registered with uow'
        def entities = [new FakeEntity(name: 'OWF'), new FakeEntity(name: 'OZP')]
        entities.each {
            it.id = UUID.randomUUID().toString()
            unitOfWork.registerNew(it)
        }

        when:
        unitOfWork.commit()

        then: 'mongo has a new document'
        documents.find().size() == 2
    }

    def "it updates dirty items in the unit of work upon commit"() {
        given: 'Entity exists in document collection'
        def entity = new FakeEntity(id: UUID.randomUUID().toString(), name: 'change me')
        documents << new FakeEntityMapper().toInsertDocument(entity)

        and: 'Entity is queried and modified in a unit of work'
        entity.name = 'changed!'
        unitOfWork.registerDirty(entity)

        when: 'commit unit of work'
        unitOfWork.commit()

        def persistedEntity = documents.findOne()
        then: 'persisted entity was changed'
        persistedEntity.name == 'changed!'
    }

    def "it removes marked items in the unit of work upon commit"() {
        given: 'Entity exists in document collection'
        def entity = new FakeEntity(id:  UUID.randomUUID().toString(), name: 'Some Entity')
        documents << new FakeEntityMapper().toInsertDocument(entity)

        and: 'Entity is marked for removal'
        unitOfWork.registerRemoved(entity)

        when: 'commit unit of work'
        unitOfWork.commit()

        then:
        documents.find().size() == 0
    }

    def cleanupSpec() {
        mongo.close()
    }

    class FakeEntity extends Entity {
        String name
    }

    class FakeEntityProxy extends FakeEntity { }

    class FakeEntityMapper extends DocumentMapper<FakeEntity, FakeEntityProxy> {

        FakeEntityMapper() {
            super(FakeEntity.class, FakeEntityProxy.class)
        }

        @Override
        def toInsertDocument(FakeEntity entity) {
            [
                    _id: entity.id,
                    name: entity.name
            ]
        }

        @Override
        FakeEntityProxy fromDocument(document) {
            new FakeEntity(id: document._id, name: document.name)
        }
    }
}

