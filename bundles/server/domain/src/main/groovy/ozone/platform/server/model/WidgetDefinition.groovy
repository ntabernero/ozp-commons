package ozone.platform.server.model

class WidgetDefinition extends Entity {

    String widgetGuid //Should this be changed to just guid to be consistent with Dashboard model?
    String universalName
    String displayName
    String description = ''
    String widgetUrl
    String descriptorUrl
    String imageUrlLarge
    String imageUrlSmall
    String widgetVersion
    Integer height
    Integer width
    Boolean background = false
    Boolean singleton = false
    Boolean visibleForLaunch = true //Changed from visible for clarity

    WidgetType widgetType //Changed from a hasMany to a one-to-one because a widget should never have multiple

    Set<String> tags // TODO Find way to implement tags either like the Grails Taggable plugin or in a new way

    /**
     * WidgetDefinition has many compulsory properties making construction
     * a complex operation. Too many arguments in the constructor is a confusing API
     * Mitigate this complexity with the builder pattern
     */
    public static WidgetDefinitionBuilder builder() {
        return new WidgetDefinitionBuilder()
    }

    protected WidgetDefinition(displayName, widgetGuid, widgetUrl, imageUrlSmall, imageUrlLarge, width, height, widgetType) {
        this.displayName = displayName
        this.widgetGuid = widgetGuid
        this.widgetUrl = widgetUrl
        this.imageUrlSmall = imageUrlSmall
        this.imageUrlLarge = imageUrlLarge
        this.width = width
        this.height = height
        this.widgetType = widgetType
    }
}
