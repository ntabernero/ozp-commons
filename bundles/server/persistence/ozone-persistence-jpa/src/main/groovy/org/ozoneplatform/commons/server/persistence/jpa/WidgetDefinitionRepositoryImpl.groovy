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

package org.ozoneplatform.commons.server.persistence.jpa

import org.ozoneplatform.commons.server.domain.model.WidgetDefinition
import org.ozoneplatform.commons.server.persistence.api.WidgetDefinitionRepository

import javax.persistence.EntityManager

class WidgetDefinitionRepositoryImpl extends GenericRepository<WidgetDefinition> implements WidgetDefinitionRepository {

    WidgetDefinitionRepositoryImpl(EntityManager entityManager) {
        super(entityManager)
    }

    @Override
    WidgetDefinition getByUniversalName(String universalName) {
        def query = entityManager.createQuery("SELECT wd FROM WidgetDefinition wd, WHERE wd.universalName = :universalName")
        query.setParameter('universalName', universalName)
        query.getSingleResult()
    }
}
