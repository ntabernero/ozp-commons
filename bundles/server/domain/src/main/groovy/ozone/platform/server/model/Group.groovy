package ozone.platform.server.model

class Group extends AbstractGroup {

    String displayName
    boolean active = true //Changed from [String status = 'active'] since there's only 2 states: active and inactive
    boolean automatic = false //Whether group's people set will be automatically handled by external sources

    final Set<WidgetDefinition> widgetDefinitions
    final Set<Stack> stacks

    Group(String name) {
        super(name)
        this.displayName = name
    }

    GroupDashboard createDashboard(String name, String guid, int position) {
        def gDashboard = new GroupDashboard(name, guid, position)
        dashboards.add(gDashboard)

        return gDashboard
    }
}
