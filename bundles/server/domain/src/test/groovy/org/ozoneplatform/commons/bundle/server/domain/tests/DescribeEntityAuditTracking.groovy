package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.Entity
import spock.lang.Specification

class DescribeEntityAuditTracking extends Specification {

    def "it updates timestamps when touched"() {
        given: "newly created entity"
        def entity = new TestEntity()

        when: "touch"
        entity.touch()
        def created = entity.created

        then: "created == lastModified"
        created.compareTo(entity.lastModified) == 0

        when: "touch again"
        entity.touch()

        then: "lastModified later than created. Created remains the same"
        entity.created.compareTo(entity.lastModified) < 0
        entity.created.compareTo(created) == 0
    }

    class TestEntity extends Entity {

    }
}
