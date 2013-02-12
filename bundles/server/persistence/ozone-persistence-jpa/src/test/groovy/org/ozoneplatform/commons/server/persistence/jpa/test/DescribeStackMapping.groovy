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
import org.ozoneplatform.commons.server.domain.model.Stack

class DescribeStackMapping extends OzoneJpaTest {

    def "it persists and retrieves a Stack"() {
        given: "a stack"
        def stack = new Stack('Investments', 'investments')
        stack.with {
            descriptorUrl = 'http://invenstments.gov/stack'
            description = 'A set of dashboards for monitoring your investments'
        }

        when: "save and retrieve"
        em.persist(stack)

        def persistedStack = em.find(Stack.class, stack.id)

        then: "all properties were persisted"
        stack.with {
            name == persistedStack.name
            urlName == persistedStack.urlName
            description = persistedStack.description
            descriptorUrl == persistedStack.descriptorUrl
        }
    }

    def "it can have many dashboard templates"() {
        given: "a stack and a dashboard template"
        def stack = new Stack('Investments', 'investments')
        def dashboardTemplate = new DashboardTemplate('NASDAQ Dashboard', 0)
        em.persist(stack)
        em.persist(dashboardTemplate)

        when: "add a dashboard template to the stack"
        stack.addDashboardTemplate(dashboardTemplate)
        stack = em.find(Stack.class, stack.id)
        dashboardTemplate = em.find(DashboardTemplate.class, dashboardTemplate.id)

        then: "stack has dashboard template"
        stack.dashboardTemplates.first() == dashboardTemplate

        and: "dashboard template has a back reference to the Stack"
        dashboardTemplate.stack == stack
    }
}
