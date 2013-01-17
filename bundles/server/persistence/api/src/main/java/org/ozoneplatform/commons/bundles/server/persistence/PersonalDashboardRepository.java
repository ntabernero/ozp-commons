package org.ozoneplatform.commons.bundles.server.persistence;

import ozone.platform.server.model.PersonalDashboard;

public interface PersonalDashboardRepository extends Repository {

    PersonalDashboard getByGuid(String guid);

}