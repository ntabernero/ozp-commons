package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

abstract class Dashboard extends Entity {

    String guid
    String name
    String description = ''
    String layoutConfig = ''
    int position //Changed from dashboardPosition
    boolean locked = false

    protected Dashboard(String name, String guid, int position) {
        setName(name)
        setGuid(guid)
        this.position = position
    }

    public void setName(String name) {
        assert isNotBlank(name), "Name is required"
        this.name = name
    }

    private void setGuid(String guid) {
        assert isNotBlank(guid), "GUID is required"
        this.guid = guid
    }
}
