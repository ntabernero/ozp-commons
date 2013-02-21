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

import org.ozoneplatform.commons.server.domain.model.Group
//import org.ozoneplatform.commons.server.domain.validation.ValidationException

class DescribeEntityLifecycleBehavior extends OzoneJpaTest {

    def "it validates an Entity before saving"() {
        given: "A Group entity which is known to have a NotEmpty name"
        def group = new Group(null)

        when: "Save Group with empty name"
        em.persist(group)

        then: "Exception thrown"
        thrown(RuntimeException)
    }
}
