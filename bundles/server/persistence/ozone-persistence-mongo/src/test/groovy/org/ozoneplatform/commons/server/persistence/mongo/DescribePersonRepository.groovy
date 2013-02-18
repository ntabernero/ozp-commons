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

import com.gmongo.GMongo
import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.persistence.mongo.mappers.PersonMapper
import org.ozoneplatform.commons.server.persistence.mongo.repositories.PersonRepositoryImpl
import spock.lang.Specification

class DescribePersonRepository extends Specification {

    def "it can add and retrieve a person"() {
        given:
        def mongo = new GMongo()
        def repository = new PersonRepositoryImpl(mongo.getDB('ozp').ozp, new PersonMapper())
        def person = new Person('testUser1', 'Test User One')
        person.with {
            email = 'testUser@example.com'
            recordLogin()
        }

        when:
        repository.add(person)
        def persistedPerson = repository.getById(person.id)

        then:
        person == persistedPerson
    }
}
