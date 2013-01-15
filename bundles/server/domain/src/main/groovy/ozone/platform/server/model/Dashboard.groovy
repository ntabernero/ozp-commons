package ozone.platform.server.model

abstract class Dashboard extends Entity {

    String guid
    String name
    String description = ''
    String layoutConfig = ''
    Integer position //Changed from dashboardPosition
    boolean locked = false

    protected Dashboard(name, guid, position) {
        this.name = name
        this.guid = guid
        this.position = position
    }
}
