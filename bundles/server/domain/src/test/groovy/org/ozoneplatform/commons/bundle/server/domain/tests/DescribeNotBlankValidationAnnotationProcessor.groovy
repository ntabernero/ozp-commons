package org.ozoneplatform.commons.bundle.server.domain.tests

import org.ozoneplatform.commons.server.domain.validation.NotBlankAnnotationValidator
import spock.lang.Specification

class DescribeNotBlankValidationAnnotationProcessor extends Specification {

    def "it returns human readable error message with the name of the invalid property"() {

        given: "property 'name' and value null"
        def processor = new NotBlankAnnotationValidator()

        when:
        def error = processor.validate('name', null, null)

        then: "returns report stating 'name is required'"
        error.with {
            property == 'name'
            validationMessage == 'name is required'
        }
    }
}
