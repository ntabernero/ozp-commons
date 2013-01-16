package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

abstract class AbstractGroup extends Entity {

    String name
    String description = ''

    final Set<GroupDashboard> dashboards
    final Set<Person> people

    AbstractGroup(String name) {
        setName(name)
    }

    void setName(String name) {
        assert isNotBlank(name), "Name is required"
        this.name = name
    }
}
