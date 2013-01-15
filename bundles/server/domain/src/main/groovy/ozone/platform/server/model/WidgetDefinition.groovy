package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class WidgetDefinition extends Entity {

    public static final int MINIMUM_WIDGET_HEIGHT = 200;
    public static final int MINIMUM_WIDGET_WIDTH = 200;

    /*
     * Required
     */
    final String guid //Changed from widgetGuid. final bc GUIDs never change
    String displayName
    String widgetUrl
    String imageUrlLarge
    String imageUrlSmall

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
     * Has One
     */
    WidgetType widgetType //Changed from a hasMany to a one-to-one because a widget should never have multiple

    /*
     * Has Many
     */
    final Set<PersonWidgetDefinition> personWidgetDefinitions
    final Set<String> tags //TODO: Find way to implement tags either like Grails Taggable plugin or new way
    final Set<WidgetDefinitionIntent> widgetDefinitionIntents

    /**
     * WidgetDefinition has many required properties making construction
     * a complex operation. Too many arguments in the constructor is a confusing API.
     * Mitigate this complexity with the builder pattern.
     */
    public static WidgetDefinitionBuilder builder() {
        return new WidgetDefinitionBuilder()
    }

    protected WidgetDefinition(guid, displayName, widgetUrl, imageUrlSmall, imageUrlLarge, widgetType) {

        assert isNotBlank(guid), "GUID is required"
        this.guid = guid

        setDisplayName(displayName)
        setWidgetUrl(widgetUrl)
        setImageUrlSmall(imageUrlSmall)
        setImageUrlLarge(imageUrlLarge)
        setWidgetType(widgetType)
    }

    public void setDisplayName(String displayName) {
        assert isNotBlank(displayName), "display name is required"
        this.displayName = displayName
    }

    public void setWidgetUrl(String url) {
        assert isNotBlank(url), "widget url is required"
        this.widgetUrl = url
    }

    public void setImageUrlSmall(String imageUrlSmall) {
        assert isNotBlank(imageUrlSmall), "small image url is required"
        this.imageUrlSmall = imageUrlSmall
    }

    public void setImageUrlLarge(String imageUrlLarge) {
        assert isNotBlank(imageUrlLarge), "large image url is required"
        this.imageUrlLarge = imageUrlLarge
    }

    public void setHeight(int height) {
        assert height >= MINIMUM_WIDGET_HEIGHT, "height must be at least ${MINIMUM_WIDGET_HEIGHT}"
        this.height = height;
    }

    public void setWidth(int width) {
        assert width >= MINIMUM_WIDGET_WIDTH, "width must be at least ${MINIMUM_WIDGET_WIDTH}"
        this.width = width;
    }

    public void setWidgetType(WidgetType widgetType) {
        assert widgetType != null, "widget type is required"
        this.widgetType = widgetType
    }
}
