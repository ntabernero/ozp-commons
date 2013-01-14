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