package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.Person
import spock.lang.Specification

class DescribePerson extends Specification {

    def "it checks for valid email addresses"() {
        given: "some person object"
        def person = new Person("smith", "John Smith")

        when: "assigning an invalid email address"
        person.email = "john.smith@"

        then: "throws"
        thrown(AssertionError)

        when: "assigning a valid email address"
        person.email = "john.smith@test.com"

        then:
        person.email == "john.smith@test.com"
    }
}
