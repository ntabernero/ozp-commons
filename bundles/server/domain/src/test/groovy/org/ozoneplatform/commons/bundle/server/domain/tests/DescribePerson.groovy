package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.Person
import spock.lang.Specification

class DescribePerson extends Specification {

    def "it checks for valid email addresses"() {
        given: "some person object"
        def person = new Person("smith", "John Smith")

        when: "assigning an invalid email address without a domain"
        person.email = "john.smith@"
        then: "throws"
        thrown(AssertionError)
        assert person.email == null

        when: "assigning an invalid email address without a top-level domain"
        person.email = "john.smith@test"
        then: "throws"
        thrown(AssertionError)
        assert person.email == null

        when: "assigning an invalid email address without an @"
        person.email = "john.smith.test.com"
        then: "throws"
        thrown(AssertionError)
        and: "email remains null"
        assert person.email == null

        when: "assigning an invalid email address with multiple @"
        person.email = "j@hn.smith@test.com"
        then: "throws"
        thrown(AssertionError)
        and: "email remains null"
        assert person.email == null

        when: "assigning an invalid email address with a space"
        person.email = "john smith@test.com"
        then: "throws"
        thrown(AssertionError)
        and: "email remains null"
        assert person.email == null

        when: "assigning an invalid email address with a top-level domain longer than the 6 chars"
        person.email = "john.smith@test.josmith"
        then: "throws"
        thrown(AssertionError)
        and: "email remains null"
        assert person.email == null

        when: "assigning an invalid email address with a top-level domain shorter than 2 chars"
        person.email = "john.smith@test.j"
        then: "throws"
        thrown(AssertionError)
        and: "email remains null"
        assert person.email == null

        when: "assigning a valid email address with the max top-level domain length"
        person.email = "johnsmith1@test.jsmith"
        then: "email is set"
        person.email == "johnsmith1@test.jsmith"

        when: "assigning a valid .com email address"
        person.email = "john.smith@test.com"
        then: "email is set"
        person.email == "john.smith@test.com"
    }
}
