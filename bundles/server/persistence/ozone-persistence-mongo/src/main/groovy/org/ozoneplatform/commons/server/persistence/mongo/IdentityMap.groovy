/*
   Copyright 2013 Next Century Corporation

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

package org.ozoneplatform.commons.server.persistence.mongo

import org.ozoneplatform.commons.server.domain.model.Entity

/**
 * Pattern: http://martinfowler.com/eaaCatalog/identityMap.html
 * The identity map will keep track of entities that have already been
 * loaded into this unit of work by their unique id. Without this pattern,
 * it would be possible to create two Java objects which correspond to the
 * same Entity in the same Unit of Work and this is an error condition
 *
 * This Identity Map has the luxury of assuming IDs are unique across all
 * Entity types since Ozone Platform uses UUIDs to identify entities
 */
interface IdentityMap {

    void register(Entity entity);

    Entity retrieve(String id);

}

class IdentityMapImpl implements IdentityMap {

    def registry = [:]

    @Override
    void register(Entity entity) {
        def cachedEntity = registry[entity.id]
        if (!cachedEntity)
            registry.put(entity.id, entity)
    }

    @Override
    Entity retrieve(String id) {
        registry[id]
    }
}