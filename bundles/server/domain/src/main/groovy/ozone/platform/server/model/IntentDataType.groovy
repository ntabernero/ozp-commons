package ozone.platform.server.model

class IntentDataType extends Entity {

    String dataType

    final Set<Intent> intents
    final Set<WidgetDefinitionIntent> widgetDefinitionIntents
}
