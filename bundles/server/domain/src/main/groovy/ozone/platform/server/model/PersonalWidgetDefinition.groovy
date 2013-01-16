package ozone.platform.server.model

class PersonalWidgetDefinition extends Entity {

    String displayName
    int position //Changed from pwdPosition
    boolean assignedByGroup = false //Changed from groupWidget
    boolean assignedToPerson = false //Changed from personWidget
    boolean favorite = false
    boolean launchDisabled = false //Changed from disabled
    boolean visibleForLaunch = true //Changed from visible

    final Person person
    final WidgetDefinition widgetDefinition

    final Set<String> tags

    protected PersonalWidgetDefinition(person, widgetDefinition) {
        this.person = person
        this.widgetDefinition = widgetDefinition
    }
}
