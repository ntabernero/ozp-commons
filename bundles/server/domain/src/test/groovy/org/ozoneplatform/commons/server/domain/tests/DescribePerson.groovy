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
import org.ozoneplatform.commons.server.domain.model.Person
import spock.lang.Specification
import spock.lang.Unroll

class DescribePerson extends Specification {

    def "it accepts valid email addresses"(address) {
        given: "some person object"
        def person = new Person("smith", "John Smith")

        when: "assigning a valid email address"
        person.email = address

        then: "email is set"
        person.email == address

        where:
        address << ["john.smith@test.com", "john.smith@test.jsmith"]
    }

    @Unroll
    def "it won't accept email addresses #fallacy"(fallacy, address) {
        given: "some person object"
        def person = new Person("smith", "John Smith")

        when: "assigning email address #fallacy"
        person.email = address

        then: "assertion thrown"
        def validationError = person.validate().find { it.property == 'email' }
        validationError != null

        where:
        fallacy | address
        "without a domain"                                | "john.smith@"
        "without a top-level domain"                      | "john.smith@test"
        "without an '@'"                                  | "john.smith.test.com"
        "with multiple @"                                 | "j@hn.smith@test.com"
        "with a space"                                    | "john smith@test.com"
        "with a top-level domain longer than the 6 chars" | "john.smith@test.josmith"
        "with a top-level domain shorter than 2 chars"    | "john.smith@test.j"
    }
}
