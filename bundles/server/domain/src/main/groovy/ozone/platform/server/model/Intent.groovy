package ozone.platform.server.model

class Intent extends Entity {

    String action

    final Set<IntentDataType> intentDataTypes
    final Set<WidgetDefinitionIntent> widgetDefinitionIntents
}
