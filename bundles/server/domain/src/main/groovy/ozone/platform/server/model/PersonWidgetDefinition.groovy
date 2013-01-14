package ozone.platform.server.model

class PersonWidgetDefinition extends Entity {

    String displayName
    Integer position //Changed from pwdPosition
    Boolean disabled = false
    Boolean favorite = false
    Boolean groupWidget = false  // True if the PWD was added to a person because of their group membership
    Boolean userWidget = false // True if the PWD was added directly to a widget.
    Boolean visibleForLaunch = true //Changed from visible to be more clear

    final Person person //Changed from person to person
    final WidgetDefinition widgetDefinition

    Set<String> tags

    protected PersonWidgetDefinition(person, widgetDefinition) {
        this.person = person
        this.widgetDefinition = widgetDefinition;
    }
}
