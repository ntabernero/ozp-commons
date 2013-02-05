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

package org.ozoneplatform.commons.server.domain.tests

import org.ozoneplatform.commons.server.domain.model.Entity
import spock.lang.Specification

class DescribeEntityAuditTracking extends Specification {

    def "it updates timestamps when touched"() {
        given: "newly created entity"
        def entity = new TestEntity()

        when: "touch"
        entity.touch('testUser')
        def created = entity.created

        then: "created == lastModified"
        created.compareTo(entity.lastModified) == 0
        entity.createdBy == 'testUser'
        entity.lastModifiedBy == 'testUser'

        when: "touch again"
        entity.touch('testAdmin')

        then: "lastModified later than created. Created remains the same"
        entity.created.compareTo(entity.lastModified) < 0
        entity.created.compareTo(created) == 0
        entity.createdBy == 'testUser'
        entity.lastModifiedBy == 'testAdmin'
    }

    class TestEntity extends Entity {

    }
}
