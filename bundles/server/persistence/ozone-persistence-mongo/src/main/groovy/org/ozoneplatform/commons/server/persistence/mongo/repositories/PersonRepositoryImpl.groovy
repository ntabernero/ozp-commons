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

import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.domain.model.Stack
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition
import org.ozoneplatform.commons.server.persistence.api.PersonRepository
import org.ozoneplatform.commons.server.persistence.mongo.MongoSession

class PersonRepositoryImpl implements PersonRepository {

    MongoSession session

    PersonRepositoryImpl(MongoSession session) {
        this.session = session
    }


    @Override
    Person getByUsername(String username) {
        session.findOne([type: 'Person', username: username])
    }

    @Override
    Iterable<Person> findPersonsWhoHaveStack(Stack stack) {
        throw new RuntimeException('Not implemented yet')
    }

    @Override
    Iterable<Person> findPersonsWhoHaveWidget(WidgetDefinition widgetDefinition) {
        throw new RuntimeException('Not implemented yet')
    }

    @Override
    Person getById(String id) {
        session.findOne(_id: id)
    }

    @Override
    Iterable<Person> findAll() {
        session.find([type: 'Person'])
    }

    @Override
    Iterable<Person> findAll(int page, int pageSize) {
        session.find([type: 'Person'], page, pageSize)
    }

    @Override
    void remove(Person entity) {
        session.remove(entity)
    }

    @Override
    void add(Person entity) {
        session.add(entity)
    }
}
