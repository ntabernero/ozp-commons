package ozone.platform.server.model

/**
*  Class to model a list of types a widget can be. (e.g. standard, administration)
*  This is a database persisted enumeration because we expect modules may add new types.
*/
class WidgetType extends Entity {

    String name

    WidgetType(name) {
        this.name = name
    }
}
