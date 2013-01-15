package ozone.platform.server.model

class Person extends Entity {

    String username
    String fullName //Changed from userRealName
    String email

    Calendar lastLogin
    Calendar prevLogin //Previous lastLogin date

    final Set<PersonDashboard> dashboards
    final Set<Group> groups
    final Set<PersonWidgetDefinition> personWidgetDefinitions
    final Set<Preference> preferences
    final Set<Role> authorities

    Dashboard createPersonDashboard(name, guid, position) {
        def dashboard = new PersonDashboard(name, guid, position, this)
        dashboards.add(dashboard)

        return dashboard
    }

    PersonWidgetDefinition createPersonWidgetDefinition(widgetDefinition) {
        def personWidgetDefinition = new PersonWidgetDefinition(this, widgetDefinition)
        personWidgetDefinitions.add(personWidgetDefinition)

        return personWidgetDefinition
    }
}
