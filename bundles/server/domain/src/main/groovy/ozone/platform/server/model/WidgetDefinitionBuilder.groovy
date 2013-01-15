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
    private int width
    private int height
    private WidgetType widgetType;

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

    WidgetDefinitionBuilder withHeight(int height) {
        this.height = height
        return this
    }

    WidgetDefinitionBuilder withWidth(int width) {
        this.width = width
        return this
    }

    WidgetDefinitionBuilder withType(WidgetType type) {
        this.widgetType = widgetType
        return this
    }

    WidgetDefinition build() {
        def widgetDefinition = new WidgetDefinition(
                name,
                guid,
                url,
                imageUrlSmall,
                imageUrlLarge,
                width,
                height,
                widgetType);
        return widgetDefinition
    }
}
