package ozone.platform.server.model

class Group extends Entity {

    String name
    String displayName
    String description = ''
    boolean active = true //Changed from [String status = 'active'] since there's only 2 states: active and inactive
    boolean automatic = false //Whether group's people set will be automatically handled by external sources

    final Set<GroupDashboard> dashboards
    final Set<Person> people
    final Set<WidgetDefinition> widgetDefinitions
    final Set<Stack> stacks
}
