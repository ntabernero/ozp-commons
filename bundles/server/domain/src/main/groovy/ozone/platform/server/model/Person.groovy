package ozone.platform.server.model

class Person extends Entity {

    String username

    final Set<PersonDashboard> dashboards
    final Set<PersonWidgetDefinition> personWidgetDefinitions

    Dashboard createPersonDashboard(name, guid, isDefault, dashboardPosition, alteredByAdmin) {
        def dashboard = new PersonDashboard(name, guid, isDefault, dashboardPosition, alteredByAdmin, this)
        dashboards.add(dashboard)

        return dashboard
    }

    PersonWidgetDefinition createPersonWidgetDefinition() {
        def personWidgetDefinition = new PersonWidgetDefinition(this)
        personWidgetDefinitions.add(personWidgetDefinition)

        return personWidgetDefinition
    }

    PersonDashboard createPersonDashboard(title) {
        def personDashboard = new PersonDashboard(title)
        dashboards.add(personDashboard)

        return personDashboard
    }
}
