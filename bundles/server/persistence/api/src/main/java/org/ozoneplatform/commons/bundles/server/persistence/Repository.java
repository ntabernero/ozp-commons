package org.ozoneplatform.commons.bundles.server.persistence;

/**
 * All repositories will likely use one type of identifier (TKey); however, the one type
 * they use may change so define the type here so we only have to change it in one spot
 * @param < T >
 */
interface Repository<T> extends RepositoryWithId<T, Long> {

}
