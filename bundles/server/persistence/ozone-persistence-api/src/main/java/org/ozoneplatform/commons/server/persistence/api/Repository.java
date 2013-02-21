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

package org.ozoneplatform.commons.server.persistence.api;

/**
 * Base interface for convenience while defining repositories. This does not imply that
 * all repositories must implement this interface nor does it imply that the persistence
 * implementation must provide a generic repository implementation (hence why this is not public)
 *
 * If it is the case that some repositories do not support one of the operations
 * of this base repository (e.g. users cannot be deleted) then those repository
 * interfaces should not extend this
 *
 * By convention, get* methods return an instance of T and find* methods return a list of T
 *
 * Modeled after http://martinfowler.com/eaaCatalog/repository.html
 *
 * @param < T > Type of the entity being persisted
 */
public interface Repository<T> {

    /**
     * Retrieve a single entity by is ID
     * @param id Unique ID of a persisted entity
     * @return
     */
    T getById(String id);

    /**
     * Retrieves all entities in the repository of type T
     * @return
     */
    Iterable<T> findAll();

    /**
     * See {@link #findAll()}
     * Paging by example
     * page = 0, pageSize = 15 returns items [0,15)
     * page = 1, pageSize = 15 returns items [15, 30)
     * @param page For paging, the page number offset
     * @param pageSize For paging, the maximum number of items to retrieve for a page
     * @return
     */
    Iterable<T> findAll(int page, int pageSize);

    /**
     * Add a new entity to the repository
     * @param entity
     */
    void add(T entity);

    /**
     * Remove an entity from the repository
     * @param entity
     */
    void remove(T entity);

}
