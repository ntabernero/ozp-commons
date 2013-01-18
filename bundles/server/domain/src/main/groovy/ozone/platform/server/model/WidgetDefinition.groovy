package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class WidgetDefinition extends Entity {

    static final int MINIMUM_WIDGET_HEIGHT = 200
    static final int MINIMUM_WIDGET_WIDTH = 200

    /*
     * Required
     */
    final String guid //Changed from widgetGuid. final bc GUIDs never change
    String displayName
    String widgetUrl
    String imageUrlLarge
    String imageUrlSmall
    String widgetType

    /*
     * Optional
     */
    String universalName
    String description = ''
    String descriptorUrl
    String version //Changed from widgetVersion

    /*
     * Defaults to value
     */
    int height = MINIMUM_WIDGET_HEIGHT
    int width = MINIMUM_WIDGET_WIDTH
    boolean background = false
    boolean singleton = false
    boolean visibleForLaunch = true //Changed from visible

    /*
     * Has Many
     */
    final Set<PersonalWidgetDefinition> personalWidgetDefinitions
    final Set<String> tags
    final Set<Intent> sendableIntents
    final Set<Intent> receivableIntents

    /**
     * WidgetDefinition has many required properties making construction
     * a complex operation. Too many arguments in the constructor is a confusing API.
     * Mitigate this complexity with the builder pattern.
     */
    static WidgetDefinitionBuilder builder() {
        return new WidgetDefinitionBuilder()
    }

    protected WidgetDefinition(String guid, String displayName, String widgetUrl, String imageUrlSmall, String imageUrlLarge, String widgetType) {

        assert isNotBlank(guid), "GUID is required"
        this.guid = guid

        setDisplayName(displayName)
        setWidgetUrl(widgetUrl)
        setImageUrlSmall(imageUrlSmall)
        setImageUrlLarge(imageUrlLarge)
        setWidgetType(widgetType)
    }

    void setDisplayName(String displayName) {
        assert isNotBlank(displayName), "Display name is required"
        this.displayName = displayName
    }

    void setWidgetUrl(String url) {
        assert isNotBlank(url), "Widget URL is required"
        this.widgetUrl = url
    }

    void setImageUrlSmall(String imageUrlSmall) {
        assert isNotBlank(imageUrlSmall), "Small image URL is required"
        this.imageUrlSmall = imageUrlSmall
    }

    void setImageUrlLarge(String imageUrlLarge) {
        assert isNotBlank(imageUrlLarge), "Large image URL is required"
        this.imageUrlLarge = imageUrlLarge
    }

    void setWidgetType(String widgetType) {
        assert isNotBlank(widgetType), "Widget type is required"
        this.widgetType = widgetType
    }

    void setHeight(int height) {
        assert height >= MINIMUM_WIDGET_HEIGHT, "Height must be at least ${MINIMUM_WIDGET_HEIGHT}"
        this.height = height
    }

    void setWidth(int width) {
        assert width >= MINIMUM_WIDGET_WIDTH, "Width must be at least ${MINIMUM_WIDGET_WIDTH}"
        this.width = width
    }
}
