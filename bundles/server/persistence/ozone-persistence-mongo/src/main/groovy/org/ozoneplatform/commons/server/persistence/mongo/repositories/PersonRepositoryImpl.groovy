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

package org.ozoneplatform.commons.server.persistence.mongo.repositories

import com.mongodb.DBCollection
import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.persistence.api.PersonRepository
import org.ozoneplatform.commons.server.persistence.mongo.mappers.PersonMapper

class PersonRepositoryImpl implements PersonRepository {

    DBCollection collection
    PersonMapper mapper

    PersonRepositoryImpl(DBCollection collection, PersonMapper mapper) {
        this.collection = collection
        this.mapper = mapper
    }


    @Override
    Person getByUsername(String username) {
        return null  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    Iterable<Person> findPersonsWhoHaveStack(org.ozoneplatform.commons.server.domain.model.Stack stack) {
        return null  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    Iterable<Person> findPersonsWhoHaveWidget(org.ozoneplatform.commons.server.domain.model.WidgetDefinition widgetDefinition) {
        return null  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    Person getById(String id) {
        def document = collection.findOne(_id: id)
        mapper.fromDocument(document)
    }

    @Override
    Iterable<Person> findAll() {
        def documents = collection.find(type: 'person')
        documents.collect {
            mapper.fromDocument(it)
        }
    }

    @Override
    Iterable<Person> findAll(int page, int pageSize) {
        return null  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    void remove(Person entity) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    void add(Person entity) {
        entity.id = UUID.randomUUID().toString()
        def document = mapper.toDocument(entity)

        println entity
        collection << document
    }
}
