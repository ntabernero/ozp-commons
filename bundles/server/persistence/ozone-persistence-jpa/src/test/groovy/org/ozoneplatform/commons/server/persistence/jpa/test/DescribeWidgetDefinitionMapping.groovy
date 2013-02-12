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

import org.ozoneplatform.commons.server.domain.model.Intent
import org.ozoneplatform.commons.server.domain.model.WidgetDefinition

class DescribeWidgetDefinitionMapping extends OzoneJpaTest {

    def "it persists and retrieves a WidgetDefinition with value objects"() {
        given:
        def wd = WidgetDefinition.builder()
                .withDisplayName('An Awesome Widget')
                .withWidgetType('normal')
                .withUrl('http://localhost:8181')
                .withImageUrlSmall('http://localhost:8181/img/widget.jpg')
                .withImageUrlLarge('http://localhost:8181/img/widget.jpg')
                .build()
        wd.description = 'It\'s a widget'
        wd.descriptorUrl = 'http:localhost/descriptor.xml'
        def receivesIntent = new Intent('plot', 'kml')
        wd.addReceivableIntent(receivesIntent)
        def sendsIntent = new Intent('view', 'application/pdf')
        wd.addSendableIntent(sendsIntent)


        when: "save and retrieve"
        em.persist(wd)

        def persistedWd = em.find(WidgetDefinition.class, wd.id)

        then:
        persistedWd != null
        persistedWd.with {
            id == wd.id
            displayName == wd.displayName
            widgetType == wd.widgetType
            widgetUrl == wd.widgetUrl
            imageUrlLarge == wd.imageUrlLarge
            imageUrlSmall == wd.imageUrlSmall
            descriptorUrl == wd.descriptorUrl
            description == wd.description
        }

        def persistedReceivesIntent = persistedWd.receivableIntents.first()
        persistedReceivesIntent.equals(receivesIntent)
        def persistedSendsIntent = persistedWd.sendableIntents.first()
        persistedSendsIntent.equals(sendsIntent)
    }
}
