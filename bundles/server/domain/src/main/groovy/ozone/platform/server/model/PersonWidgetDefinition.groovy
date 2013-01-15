package ozone.platform.server.model

class PersonWidgetDefinition extends Entity {

    String displayName
    Integer position //Changed from pwdPosition
    Boolean assignedByGroup = false //Changed from groupWidget
    Boolean assignedToPerson = false //Changed from personWidget
    Boolean favorite = false
    Boolean launchDisabled = false //Changed from disabled
    Boolean visibleForLaunch = true //Changed from visible

    final Person person
    final WidgetDefinition widgetDefinition

    final Set<String> tags

    protected PersonWidgetDefinition(person, widgetDefinition) {
        this.person = person
        this.widgetDefinition = widgetDefinition;
    }
}
