package org.ozoneplatform.commons.bundle.server.domain.tests
import spock.lang.Specification

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class DescribeValidationHelpers extends Specification {

    def "it can determine if a string is blank"() {
        boolean blank = false

        when: "checks a null string"
        blank = !isNotBlank(null)

        then: "returns false"
        blank

        when: "checks an empty string"
        blank = !isNotBlank("")

        then: "returns false"
        blank

        when: "checks a string with only whitespace"
        blank = !isNotBlank("   ")

        then: "returns false"
        blank

        when: "checks a valid string"
        boolean notBlank = isNotBlank("Foo")

        then: "returns true"
        notBlank
    }
}
