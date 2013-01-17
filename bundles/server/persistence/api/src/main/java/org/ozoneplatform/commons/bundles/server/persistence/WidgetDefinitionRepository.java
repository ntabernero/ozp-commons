package org.ozoneplatform.commons.bundles.server.persistence;

import ozone.platform.server.model.WidgetDefinition;

public interface WidgetDefinitionRepository extends Repository<WidgetDefinition> {

    WidgetDefinition getByGuid(String guid);

    WidgetDefinition getByUniversalName(String universalName);

}