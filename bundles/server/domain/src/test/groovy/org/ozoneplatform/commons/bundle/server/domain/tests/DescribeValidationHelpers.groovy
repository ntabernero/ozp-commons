package org.ozoneplatform.commons.bundle.server.domain.tests
import spock.lang.Specification
import spock.lang.Unroll

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class DescribeValidationHelpers extends Specification {

    def "it recognizes valid strings are not blank"() {
        expect:
        isNotBlank("Foo")
    }

    @Unroll
    def "it recognizes #fallacy as blank"(s, fallacy) {
        expect: "${fallacy} is blank"
        !isNotBlank(s)

        where:
        s    | fallacy
        ""   | "empty string"
        "  " | "all whitespace"
        null | "null"
    }
}
