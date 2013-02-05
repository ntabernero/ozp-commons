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

package org.ozoneplatform.commons.bundles.server.persistence;

import java.util.List;

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
 * @param < TKey > Type of the identifier for the entity being persisted e.g. long, UUID
 */
interface RepositoryWithId<T, TKey> {

    T getById(TKey id);

    List<T> findAll();

    void add(T entity);

    void remove(T entity);
}