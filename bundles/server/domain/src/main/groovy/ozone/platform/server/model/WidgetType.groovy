package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

/**
*  Class to model a list of types a widget can be. (e.g. standard, administration)
*  This is a database persisted enumeration because we expect modules may add new types.
*/
class WidgetType extends Entity {

    String name

    WidgetType(String name) {
        setName(name)
    }

    public void setName(String name) {
        assert isNotBlank(name), "Name is required"
        this.name = name
    }
}
