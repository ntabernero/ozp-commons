package ozone.platform.server.model

class User extends Entity {

    String username

    Set<Dashboard> dashboards
    Set<UserWidgetDefinition> userWidgetDefinitions

    Dashboard createUserDashboard(name, guid, isdefault, dashboardPosition, alteredByAdmin) {
        def dashboard = new UserDashboard(name, guid, isdefault, dashboardPosition, alteredByAdmin, this)
        dashboards.add(dashboard)

        return dashboard
    }

    UserWidgetDefinition createUserWidgetDefinition() {
        def userWidgetDefinition = new UserWidgetDefinition()
        userWidgetDefinitions.add(userWidgetDefinition)

        return userWidgetDefinition
    }
}
