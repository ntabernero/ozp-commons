package ozone.platform.server.model

class UserWidgetDefinition extends Entity {

    String displayName
    Integer position //Changed from pwdPosition
    Boolean disabled = false
    Boolean favorite = false
    Boolean groupWidget = false  // True if the PWD was added to a user because of their group membership
    Boolean userWidget = false // True if the PWD was added directly to a widget.
    Boolean visibleForLaunch = true //Changed from visible to be more clear

    User user //Changed from person to user
    WidgetDefinition widgetDefinition

    Set<String> tags

    protected UserWidgetDefinition() {
    }
}
