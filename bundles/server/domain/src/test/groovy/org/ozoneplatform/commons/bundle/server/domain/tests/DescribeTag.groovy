package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.Tag
import spock.lang.Specification

class DescribeTag extends Specification {

    def "it must have a name"() {
        when: "creating a new tag without a name"
        def tag = new Tag(null)

        then: "throws"
        thrown(AssertionError)
    }

    def "it's name must be converted to all lowercase"() {
        when: "creating a new tag with uppercase characters in the name"
        def tag = new Tag("nAME")

        then: "name is stored in all lowercase"
        tag.name == "name"
    }
}
