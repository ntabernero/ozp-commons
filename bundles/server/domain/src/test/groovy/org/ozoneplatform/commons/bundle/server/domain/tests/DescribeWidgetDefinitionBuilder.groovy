package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.WidgetDefinition
import spock.lang.Specification

class DescribeWidgetDefinitionBuilder extends Specification {

    def "it can construct WidgetDefinition"() {
        given:
        String guid = UUID.randomUUID().toString()
        String displayName = "Maps Widget"
        String widgetUrl = "http://example.com"
        String imageUrlSmall = "http://example.com/img/widget-icon-small.png"
        String imageUrlLarge = "http://example.com/img/widget-icon-large.png"
        String widgetType = "admin"

        when: "system uses WidgetDefinition fluent construction api"
        def widgetDefinition = WidgetDefinition.builder()
            .withDisplayName(displayName)
            .withGuid(guid)
            .withImageUrlSmall(imageUrlSmall)
            .withImageUrlLarge(imageUrlLarge)
            .withUrl(widgetUrl)
            .withWidgetType(widgetType)
            .build();

        then: "built WidgetDefinition has all its required properties set"
        widgetDefinition.displayName == displayName
        widgetDefinition.guid == guid
        widgetDefinition.imageUrlSmall == imageUrlSmall
        widgetDefinition.imageUrlLarge == imageUrlLarge
        widgetDefinition.widgetUrl == widgetUrl
    }
}
