package org.ozoneplatform.commons.bundles.server.persistence;

import ozone.platform.server.model.Person;

public interface PersonRepository extends Repository {

    Person getByUsername(String username);

}