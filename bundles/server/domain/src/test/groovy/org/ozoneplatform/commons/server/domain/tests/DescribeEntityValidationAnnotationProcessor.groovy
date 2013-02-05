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
