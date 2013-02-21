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

package org.ozoneplatform.commons.server.domain.listener;

import org.ozoneplatform.commons.server.domain.model.Entity;
import org.ozoneplatform.commons.server.domain.model.ValidationError;

import java.util.List;
import java.util.UUID;

//import org.ozoneplatform.commons.server.domain.validation.ValidationException;

/**
 * EntityListener performs validation and before saving and updating entities
 * and will throw a ValidationException if ValidationErrors are found
 * Before saving an Entity, EntityListener generates a new GUID
 *
 * TODO This would be an ideal place to also call the Entity.touch(String username)
 * method which updates the entity's audit fields. This is not yet implemented
 * because the touch method needs to record which user is saving and updating the
 * entity and the service that provides that information is not yet available
 *
 * Important:
 * EntityListener must be written in Java as its Groovy equivalent is not
 * compatible with OpenJPA as OpenJPA fails during the bytecode enhancement
 * phase.
 *
 */
public class EntityListener {

    public EntityListener() { }

    void prePersist(Object object) {
        Entity entity = (Entity)object;
        entity.setId(UUID.randomUUID().toString());
        preUpdate(entity);
    }

    void preUpdate(Object object) {
        Entity entity = (Entity)object;
        List<ValidationError> validationErrors = entity.validate();
        if (validationErrors != null && !validationErrors.isEmpty()) {
            String message = "Entity violates validation constraints";
            for(ValidationError error : validationErrors) {
                message += String.format("\nProperty: %s, Error: %s", error.getProperty(), error.getValidationMessage());
            }
            throw new RuntimeException(message);
        }
    }
}
