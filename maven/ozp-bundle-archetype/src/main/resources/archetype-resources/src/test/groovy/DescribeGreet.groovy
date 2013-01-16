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