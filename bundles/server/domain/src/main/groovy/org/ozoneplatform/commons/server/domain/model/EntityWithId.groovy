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

package org.ozoneplatform.commons.server.domain.model

/**
 * Base class for persistence entities.
 * Entities: http://martinfowler.com/bliki/EvansClassification.html
 *
 * May be expanded upon to include a common way of doing comparisons by ID
 * @param < T >
 */
abstract class EntityWithId<T extends Comparable> implements Serializable {

    T id
    Calendar created
    Calendar lastModified
    /**
     * Username of the user who last created/modified this entity
     */
    String createdBy
    String lastModifiedBy

    /**
     * Validates all properties of an Entity and returns a list of ValidationError's
     * for each invalid property
     *
     * Valid entities return an empty list of ValidationErrors
     * @return
     */
    List<ValidationError> validate() {
        def errors = []
        return errors as ValidationError[]
    }

    /**
     * Private setter for lastModified
     * Use 'touch' to set lastModified to now
     * @param lastModified
     */
    private void setLastModified(Calendar lastModified) { this.lastModified = lastModified }
    private void setCreated(Calendar created) { this.created = created }
    private void setLastModifiedBy(String lastModifiedBy) { this.lastModifiedBy = lastModifiedBy }

    /**
     * Analogous to unix command 'touch'
     * Will set lastModified to now and will also set created to now if
     * created is not set
     */
    void touch(String currentUser) {
        def now = Calendar.instance
        if (!created) {
            created = now
            createdBy = currentUser
        }
        lastModified = now
        lastModifiedBy = currentUser
    }


}
