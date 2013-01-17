package org.ozoneplatform.commons.bundles.server.persistence;

import ozone.platform.server.model.GroupDashboard;

public interface GroupDashboardRepository extends Repository {

    GroupDashboard getByGuid(String guid);

}