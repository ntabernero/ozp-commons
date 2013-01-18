package org.ozoneplatform.commons.bundle.server.domain.tests
import ozone.platform.server.model.Person
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
        thrown(AssertionError)
        and: "email remains null"
        person.email == null

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
