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

package $package

import spock.lang.Specification

class DescribeGreet extends Specification {

    def "it will greet someone while taking care to politely uppercase their name"() {

        when: "Greeting world"
        def greet = new Greet("world")
        def salutation = greet.salute()

        then: "salutation reads 'Hello World!'"
        salutation == "Hello World!"
    }

    def "fails to remind developers to delete this boilerplate code"() {

        when: "run this test"

        then: "fail"
        throw new RuntimeException()
    }
}