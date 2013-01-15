package ozone.platform.server.model

class WidgetDefinition extends Entity {

    String guid //Changed from widgetGuid
    String universalName
    String displayName
    String description = ''
    String widgetUrl
    String descriptorUrl
    String imageUrlLarge
    String imageUrlSmall
    String version //Changed from widgetVersion
    Integer height
    Integer width
    Boolean background = false
    Boolean singleton = false
    Boolean visibleForLaunch = true //Changed from visible

    WidgetType widgetType //Changed from a hasMany to a one-to-one because a widget should never have multiple

    final Set<PersonWidgetDefinition> personWidgetDefinitions
    final Set<String> tags //TODO: Find way to implement tags either like Grails Taggable plugin or new way
    final Set<WidgetDefinitionIntent> widgetDefinitionIntents

    /**
     * WidgetDefinition has many compulsory properties making construction
     * a complex operation. Too many arguments in the constructor is a confusing API.
     * Mitigate this complexity with the builder pattern.
     */
    public static WidgetDefinitionBuilder builder() {
        return new WidgetDefinitionBuilder()
    }

    protected WidgetDefinition(guid, displayName, widgetUrl, imageUrlSmall, imageUrlLarge, height, width, widgetType) {
        this.guid = guid
        this.displayName = displayName
        this.widgetUrl = widgetUrl
        this.imageUrlSmall = imageUrlSmall
        this.imageUrlLarge = imageUrlLarge
        this.height = height
        this.width = width
        this.widgetType = widgetType
    }
}
