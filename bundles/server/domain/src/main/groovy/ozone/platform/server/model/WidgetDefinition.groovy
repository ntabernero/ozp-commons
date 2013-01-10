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
    Boolean visibleForLaunch = true //Changed from visible to be more clear

    WidgetType widgetType //Changed from a hasMany to a one-to-one because a widget should never have multiple

    Set<String> tags //Find way to implement tags either like the Grails Taggable plugin or in a new way
    Set<UserWidgetDefinition> userWidgetDefinition
}
