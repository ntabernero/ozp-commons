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
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition

class DescribeDashboardTemplateMapping extends OzoneJpaTest{

    def "it persists and retrieves a DashboardTemplate"() {
        given:
        def template = new DashboardTemplate('COP', 0)
        template.with {
            description = 'Common Operating Picture'
            layoutConfig = '{bigJsonBlob: true}'
            isLocked = true
        }

        when: "save and retrieve"
        em.persist(template)

        def persistedTemplate = em.find(DashboardTemplate.class, template.id)

        then: "persists all properties"
        template.with {
            id == persistedTemplate.id
            name = persistedTemplate.name
            description == persistedTemplate.description
            layoutConfig == persistedTemplate.layoutConfig
            isLocked == persistedTemplate.isLocked
        }
    }

    def "it can have widget definitions"() {
        given: "a dashboard template and a widget definition"
        def template = new DashboardTemplate('COP', 0)
        def mapWidget = WidgetDefinition.builder()
                .withDisplayName('Google Map')
                .withImageUrlSmall('http://localhost/smallimg')
                .withImageUrlLarge('http://localhost/largeimg')
                .withUrl('http://localhost')
                .withWidgetType('map')
                .build()
        em.persist(template)
        em.persist(mapWidget)

        when: "add widget definition to dashboard template"
        template.addWidgetDefinition(mapWidget)

        def persistedTemplate = em.find(DashboardTemplate.class, template.id)

        then: "dashboard template has a widget definition"
        persistedTemplate.widgetDefinitions.first() == mapWidget
    }
}
