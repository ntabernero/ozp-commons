package ozone.platform.server.model

abstract class Dashboard extends Entity {

    String title // UI consistently calls this title
    String guid
    boolean isDefault //Capitalized d, should we change all booleans to is*?
    Integer dashboardPosition
    String description = ''
    String layoutConfig = ''
    boolean locked = false

    protected Dashboard(title, guid, isDefault, dashboardPosition) {
        this.title = title
        this.guid = guid
        this.isDefault = isDefault
        this.dashboardPosition = dashboardPosition
    }
}
