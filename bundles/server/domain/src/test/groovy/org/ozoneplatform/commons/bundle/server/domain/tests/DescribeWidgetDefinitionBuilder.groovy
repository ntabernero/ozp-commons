package org.ozoneplatform.commons.bundle.server.domain.tests

import ozone.platform.server.model.WidgetDefinition
import ozone.platform.server.model.WidgetType
import spock.lang.Specification

class DescribeWidgetDefinitionBuilder extends Specification {

    def "it can construct WidgetDefinition"() {
        given:
        String guid = UUID.randomUUID().toString()
        String displayName = "Maps Widget"
        String widgetUrl = "http://example.com"
        String imageUrlSmall = "http://example.com/img/widget-icon-small.png"
        String imageUrlLarge = "http://example.com/img/widget-icon-large.png"
        int width = 250
        int height = 250
        WidgetType type = new WidgetType("admin")

        when: "system uses WidgetDefinition fluent construction api"
        def widgetDefinition = WidgetDefinition.builder()
            .withDisplayName(displayName)
            .withGuid(guid)
            .withWidth(width)
            .withHeight(height)
            .withImageUrlSmall(imageUrlSmall)
            .withImageUrlLarge(imageUrlLarge)
            .withUrl(widgetUrl)
            .build();

        then: "built WidgetDefinition has all its required properties set"
        widgetDefinition.displayName == displayName
        widgetDefinition.guid == guid
        widgetDefinition.width == width
        widgetDefinition.height == height
        widgetDefinition.imageUrlSmall == imageUrlSmall
        widgetDefinition.imageUrlLarge == imageUrlLarge
        widgetDefinition.widgetUrl == widgetUrl
    }
}
