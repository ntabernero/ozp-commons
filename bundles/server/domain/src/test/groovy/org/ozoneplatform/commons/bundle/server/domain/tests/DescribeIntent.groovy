package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.Intent
import spock.lang.Specification

class DescribeIntent extends Specification {

    def "it must be created as an intent that is received and/or sent to widgets"() {
        when: "creating a new intent that cannot be sent or received"
        def intent = new Intent("plot", "application/vnd.google-earth.kml+xml", false, false)

        then: "throws"
        thrown(AssertionError)
    }

    def "it always is received and/or sent to widgets"() {
        given: "an intent that is both received and sent"
        def intent = new Intent("plot", "application/vnd.google-earth.kml+xml", true, true)

        when: "marking the intent as neither received nor sent"
        intent.setCanReceive(false)
        intent.setCanSend(false)

        then: "throws"
        thrown(AssertionError)
        and: "canReceive was set to false"
        intent.canReceive == false
        and: "canSend was not set to false"
        intent.canSend == true
    }
}
