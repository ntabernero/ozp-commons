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
import org.ozoneplatform.commons.server.domain.model.Group
import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition

class DescribeGroupMapping extends OzoneJpaTest {

    def "it persists and retrieves a Group with value objects"() {
        given:
        def group = new Group('admins')
        group.with {
            displayName = 'Admins'
            description = 'They\'re in charge'
        }
        def pref = group.setPreference('com.example','favorite','true')

        when: "save and retrieve"
        em.persist(group)

        def persistedGroup = em.find(Group.class, group.id)

        then: "all properties were persisted"
        group.with {
            id == persistedGroup.id
            name = persistedGroup.name
            displayName == persistedGroup.displayName
            description = persistedGroup.description
            preferences.first() == pref
        }
    }

    def "it can have persons"() {
        given: "a group and person exists"
        def group = new Group('admins')
        def testAdmin1 = new Person('testAdmin1', 'Test Admin')
        em.persist(group)
        em.persist(testAdmin1)

        when: "add the person to group"
        group.addPerson(testAdmin1)
        def persistedGroup = em.find(Group.class, group.id)

        then: "group contains person"
        persistedGroup.persons.first() == testAdmin1
    }

    def "it can have dashboard templates"() {
        given: "a group and a dashboard template exists"
        def group = new Group('admins')
        def adminDashboard = new DashboardTemplate('Admin Dashboard', 0)
        em.persist(group)
        em.persist(adminDashboard)

        when: "add the dashboard template to the group"
        group.addDashboardTemplate(adminDashboard)

        // refresh
        group = em.find(Group.class, group.id)
        adminDashboard = em.find(DashboardTemplate.class, adminDashboard.id)

        then: "group has dashboard template"
        group.dashboardTemplates.first() == adminDashboard

        and: "dashboard template has a back reference to the group"
        adminDashboard.groups.first() == group
    }

    def "it can have widget definitions"() {
        given: "a group and a widget definition exists"
        def group = new Group('admins')
        def mapWidget = WidgetDefinition.builder()
                .withDisplayName('Google Map')
                .withImageUrlSmall('http://localhost/smallimg')
                .withImageUrlLarge('http://localhost/largeimg')
                .withUrl('http://localhost')
                .withWidgetType('map')
                .build()
        em.persist(group)
        em.persist(mapWidget)

        when: "add the widget to the group"
        group.addWidgetDefinition(mapWidget)

        // refresh
        group = em.find(Group.class, group.id)
        mapWidget = em.find(WidgetDefinition.class, mapWidget.id)

        then: "group has a widget definition"
        group.widgetDefinitions.first() == mapWidget

        and: "widget definition has a back reference to group"
        mapWidget.groups.first() == group
    }
}
