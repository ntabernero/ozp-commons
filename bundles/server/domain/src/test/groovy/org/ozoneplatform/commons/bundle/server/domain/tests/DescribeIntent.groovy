package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.Intent
import spock.lang.Specification

class DescribeIntent extends Specification {

    def "it must be created as an intent that is received and/or sent to widgets"() {
        when: "creating a new intent that cannot be sent or received"
        def intent = new Intent("plot", "application/vnd.google-earth.kml+xml", false, false)
        then: "throws"
        thrown(AssertionError)

        when: "setting an existing intent to neither be sent nor received"

        then: "throws"
    }

    def "it always is received and/or sent to widgets"() {
        given: "an intent that is both received and sent"
        def intent = new Intent("plot", "application/vnd.google-earth.kml+xml", true, true)

        when: "marking the intent as neither received nor sent"
        intent.setCanReceive(false)
        intent.setCanSend(false)

        then: "throws"
        thrown(AssertionError)
    }
}
