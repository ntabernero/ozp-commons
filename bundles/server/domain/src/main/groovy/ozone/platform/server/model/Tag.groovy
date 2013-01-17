package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Tag extends Entity {

    String name

    final Set<WidgetDefinition> widgetDefinitions

    Tag(String name) {
        setName(name)
    }

    void setName(String name) {
        assert isNotBlank(name), "Name is required"
        this.name = name.toLowerCase()
    }
}
