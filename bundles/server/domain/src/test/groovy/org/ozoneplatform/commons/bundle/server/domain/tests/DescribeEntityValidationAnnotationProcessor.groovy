package org.ozoneplatform.commons.bundle.server.domain.tests

import org.ozoneplatform.commons.server.domain.validation.EntityValidationAnnotationProcessor
import org.ozoneplatform.commons.server.domain.validation.NotBlank
import spock.lang.Specification

class DescribeEntityValidationAnnotationProcessor extends Specification {

    def "it processes NotBlank annotations"() {

        given: "An object whose name property is annotated with NotBlank yet is null (considered blank)"
        def entity = new TestEntity()
        def validationProcessor = EntityValidationAnnotationProcessor.instance

        when: "validation processor validates this object"
        def errors = validationProcessor.validate(entity)

        then: "finds validation error"
        errors.first() != null
    }

    private class TestEntity {

        @NotBlank
        String name
    }
}
