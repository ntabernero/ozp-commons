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
import spock.lang.Specification
import spock.lang.Unroll

import static org.ozoneplatform.commons.server.domain.validation.ValidationHelpers.isNotBlank

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
