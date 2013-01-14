package org.ozoneplatform.commons.bundles.server.persistence;

import ozone.platform.server.model.WidgetType;

public interface WidgetTypeRepoistory {

    WidgetType getByName(String name);
}