package ozone.platform.server.model

class Stack extends Entity {

    String name
    String description
    String urlName //Changed from stackContext
    String descriptorUrl

    final Set<Group> groups
    final Set<Person> people
    final Set<StackDashboard> dashboards
}