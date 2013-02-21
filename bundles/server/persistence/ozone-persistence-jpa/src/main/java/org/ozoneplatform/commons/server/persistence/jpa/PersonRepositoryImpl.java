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

package org.ozoneplatform.commons.server.persistence.jpa;

import org.ozoneplatform.commons.server.domain.model.Person;
import org.ozoneplatform.commons.server.domain.model.Stack;
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition;
import org.ozoneplatform.commons.server.persistence.api.PersonRepository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class PersonRepositoryImpl extends GenericRepository<Person> implements PersonRepository {

    public PersonRepositoryImpl() {
        super();
    }

    public PersonRepositoryImpl(EntityManager entityManager) {
        super(entityManager);
    }

    public Person getById(String id) {
        return super.getById(Person.class, id);
    }

    public Iterable<Person> findAll() {
        return super.findAll(Person.class);
    }

    public Iterable<Person> findAll(int page, int pageSize) {
        return super.findAll(Person.class, page, pageSize);
    }

    public Person getByUsername(String username) {
        TypedQuery<Person> query = this.getEntityManager().createQuery("SELECT p FROM Person WHERE p.username = :username", Person.class);
        query.setParameter("username", username);
        return query.getSingleResult();
    }

    public Iterable<Person> findPersonsWhoHaveWidget(WidgetDefinition widgetDefinition) {
        TypedQuery<Person> query = this.getEntityManager().createQuery("SELECT p FROM Person p, PersonalWidgetDefinition pwd WHERE pwd.widgetDefinition.id = :wdid AND pwd member OF p.personalWidgetDefinitions", Person.class);
        query.setParameter("wdid", widgetDefinition.getId());
        return query.getResultList();
    }

    public Iterable<Person> findPersonsWhoHaveStack(Stack stack) {
        TypedQuery<Person> query = this.getEntityManager().createQuery("SELECT p FROM Person p, Stack s WHERE s.id = :sid AND s member OF p.stacks", Person.class);
        query.setParameter("sid", stack.getId());
        return query.getResultList();
    }

}
