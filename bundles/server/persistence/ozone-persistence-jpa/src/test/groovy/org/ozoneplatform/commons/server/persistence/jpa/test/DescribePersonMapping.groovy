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

package org.ozoneplatform.commons.server.persistence.jpa.test
import org.ozoneplatform.commons.server.domain.model.DashboardTemplate
import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition
import org.ozoneplatform.commons.server.domain.model.Stack

class DescribePersonMapping extends OzoneJpaTest {

    def "it persists and retrieves a Person with its value objects"() {
        given: "a person with a preference"
        def person = new Person('testUser', 'Test User')
        person.with {
            email = 'testuser@example.com'
        }
        def pref = person.setPreference('com.example','fav','true')

        when: "save and retrieve"
        em.persist(person)

        def persistedPerson = em.find(Person.class, person.id)

        then: "all properties were persisted"
        person.with {
            username == persistedPerson.username
            fullName == persistedPerson.fullName
            email == persistedPerson.email
            preferences.first().equals(pref)
        }
    }

    def "it aggregates dashboard instances"() {
        given: "a person and a dashboard template from which to create an instance"
        def person = new Person('testUser', 'Test User')
        def dashboardTemplate = new DashboardTemplate('Map Dashboard', 0)
        em.persist(person)
        em.persist(dashboardTemplate)

        when: "create a dashboard instance for user"
        em.getTransaction().begin()
        def instance = person.createDashboardInstanceFromTemplate(dashboardTemplate)
        em.getTransaction().commit()

        em.getTransaction().begin()
        person = em.find(Person.class, person.id)
        dashboardTemplate = em.find(DashboardTemplate.class, dashboardTemplate.id)

        then: "person has dashboard instance"
        person.dashboards.first().with {
            equals(instance)
            dashboardTemplate == dashboardTemplate
        }

        when: "dashboard instance removed from person"
        person.removeDashboardInstance(instance)
        em.getTransaction().commit()

        then: "dashboard instance is deleted"
        em.createQuery("SELECT COUNT(d) FROM DashboardInstance d").getSingleResult() == 0
    }

    def "it aggregates personal widget definitions"() {
        given: "a person and a widget definition"
        def person = new Person('testUser', 'Test User')
        def widgetDefinition = WidgetDefinition.builder()
                .withDisplayName('Google Map')
                .withImageUrlSmall('http://localhost/smallimg')
                .withImageUrlLarge('http://localhost/largeimg')
                .withUrl('http://localhost')
                .withWidgetType('map')
                .build()
        em.persist(person)
        em.persist(widgetDefinition)

        when: "create a personal widget definition"
        em.getTransaction().begin()
        person = em.find(Person.class, person.id)
        widgetDefinition = em.find(WidgetDefinition.class, widgetDefinition.id)
        def personalWidgetDef = person.createPersonalWidgetDefinition(widgetDefinition)
        em.getTransaction().commit()

        em.getTransaction().begin()
        person = em.find(Person.class, person.id)
        widgetDefinition = em.find(WidgetDefinition.class, widgetDefinition.id)
        personalWidgetDef = person.personalWidgetDefinitions.first()

        then: "person has the personal widget definition"
        personalWidgetDef.with {
            equals(personalWidgetDef)
            widgetDefinition.equals(widgetDefinition)
        }

        when: "remove personal widget definition from person"
        person.removePersonalWidgetDefinition(personalWidgetDef)
        em.getTransaction().commit()

        then: "personal widget definition is deleted"
        em.createQuery("SELECT COUNT(pwd) FROM PersonalWidgetDefinition pwd").getSingleResult() == 0
    }
    
    def "it can have Stacks"() {
        given: "a person and a Stack"
        def person = new Person('testUser', 'Test User 1')
        def stack = new Stack('Investments', 'investments')
        em.persist(person)
        em.persist(stack)

        when: "give the Stack to the Person"
        person.addStack(stack)
        def persistedPerson = em.find(Person.class, person.id)

        then: "person has a Stack"
        persistedPerson.stacks.first().equals(stack)
    }
}
