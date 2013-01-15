package ozone.platform.server.model

class WidgetDefinitionIntent extends Entity {

    Boolean send
    Boolean receive

    final Intent intent
    final WidgetDefinition widgetDefinition

    final Set<IntentDataType> intentDataTypes
}
