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

import org.ozoneplatform.commons.server.domain.model.Group
import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.domain.model.Stack
import org.ozoneplatform.commons.server.persistence.api.GroupRepository

import javax.persistence.EntityManager

class GroupRepositoryImpl extends GenericRepository<Group> implements GroupRepository {

    GroupRepositoryImpl(EntityManager entityManager) {
        super(entityManager)
    }

    @Override
    Iterable<Group> findGroupsForPerson(Person person) {
        def query = entityManager.createQuery("SELECT g FROM Group g, Person p, WHERE p.id = :pid AND p member OF g.persons", Group.class)
        query.setParameter('pid', person.id)
        query.getResultList()
    }

    @Override
    Iterable<Group> findGroupsForStack(Stack stack) {
        def query = entityManager.createQuery("SELECT g FROM Group g, Stack s, WHERE s.id = :sid AND s member OF g.stacks", Group.class)
        query.setParameter('sid', stack.id)
        query.getResultList()
    }
}
