package ozone.platform.server.model

abstract class Dashboard extends Entity {

    String name
    String guid
    boolean isDefault //Capitalized d, should we change all booleans to is*?
    Integer dashboardPosition
    boolean alteredByAdmin
    String description = ''
    String layoutConfig = ''
    boolean locked = false

    protected Dashboard(name, guid, isDefault, dashboardPosition, alteredByAdmin) {
        this.name = name
        this.guid = guid
        this.isDefault = isDefault
        this.dashboardPosition = dashboardPosition
        this.alteredByAdmin = alteredByAdmin
    }
}
