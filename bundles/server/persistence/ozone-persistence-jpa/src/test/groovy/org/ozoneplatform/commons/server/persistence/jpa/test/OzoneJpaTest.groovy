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
import spock.lang.Shared
import spock.lang.Specification

import javax.persistence.EntityManager
import javax.persistence.EntityManagerFactory
import javax.persistence.Persistence

abstract class OzoneJpaTest extends Specification {

    @Shared EntityManagerFactory entityManagerFactory
    @Shared EntityManager em

    def setupSpec() {
        entityManagerFactory = Persistence.createEntityManagerFactory("ozone-test")
        em = entityManagerFactory.createEntityManager()
    }

    def cleanupSpec() {
        em?.close()
        entityManagerFactory?.close()
    }
}
