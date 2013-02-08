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

package org.ozoneplatform.commons.server.persistence.jpa

import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.domain.model.Stack
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition
import org.ozoneplatform.commons.server.persistence.api.PersonRepository

import javax.persistence.EntityManager

class PersonRepositoryImpl extends GenericRepository<Person> implements PersonRepository {

    PersonRepositoryImpl(EntityManager entityManager) {
        super(entityManager)
    }

    @Override
    Person getByUsername(String username) {
        def query = entityManager.createQuery("SELECT p FROM Person WHERE p.username = :username")
        query.setParameter('username', username)
        query.getSingleResult()
    }

    @Override
    Iterable<Person> findPersonsWhoHaveWidget(WidgetDefinition widgetDefinition) {
        def query = entityManager.createQuery("SELECT p FROM Person p, PersonalWidgetDefinition pwd WHERE pwd.widgetDefinition.id = :wdid AND pwd member OF p.personalWidgetDefinitions")
        query.setParameter('wdid', widgetDefinition.id)
        query.resultList
    }

    @Override
    Iterable<Person> findPersonsWhoHaveStack(Stack stack) {
        def query = entityManager.createQuery("SELECT p FROM Person p, Stack s WHERE s.id = :sid AND s member OF p.stacks")
        query.setParameter('sid', stack.id)
        query.resultList
    }
}
