package ozone.platform.server.model

/**
 * Provide a fluent interface for building new WidgetDefinition entities
 * which require a lot of required properties
 */
class WidgetDefinitionBuilder {

    private String name
    private String guid
    private String url
    private String imageUrlSmall
    private String imageUrlLarge
    private WidgetType widgetType

    protected WidgetDefinitionBuilder() { }

    WidgetDefinitionBuilder withDisplayName(String name) {
        this.name = name
        return this
    }

    WidgetDefinitionBuilder withGuid(String guid) {
        this.guid = guid
        return this
    }

    WidgetDefinitionBuilder withUrl(String widgetUrl) {
        this.url = widgetUrl
        return this
    }

    WidgetDefinitionBuilder withImageUrlSmall(String imageUrlSmall) {
        this.imageUrlSmall = imageUrlSmall
        return this
    }

    WidgetDefinitionBuilder withImageUrlLarge(String imageUrlLarge) {
        this.imageUrlLarge = imageUrlLarge
        return this
    }

    WidgetDefinitionBuilder withType(WidgetType type) {
        this.widgetType = type
        return this
    }

    WidgetDefinition build() {
        def widgetDefinition = new WidgetDefinition(
                guid,
                name,
                url,
                imageUrlSmall,
                imageUrlLarge,
                widgetType)
        return widgetDefinition
    }
}
