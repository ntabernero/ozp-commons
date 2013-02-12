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

import groovy.transform.PackageScope

import javax.persistence.EntityManager

/**
 * In this implementation, all repositories support basic CRUD so composing this
 * GenericRepository will assist in code reuse while defining the Ozone domain specific
 * repositories
 * This GenericRepository should only be accessible within this package so that it does
 * not appear to other packages to be able to persist any type T
 * @param < T >
 */
@PackageScope
abstract class GenericRepository<T> {

    EntityManager entityManager

    GenericRepository(EntityManager entityManager) {
        this.entityManager = entityManager
    }

    T getById(String id) {
        entityManager.find(T.class, id)
    }

    Iterable<T> findAll() {
        findAll(-1, -1)
    }

    /**
     * The GenericRepository will build a dynamic query capable of finding all T for
     * any T. Dynamic queries are less optimal than named queries (defined in orm.xml)
     * since named queries can be compiled to SQL once at initialization
     *
     * TODO Consider making this method abstract and having each specific repository
     * implement findAll with their own named query
     * @param page
     * @param pageSize
     * @return
     */
    Iterable<T> findAll(int page, int pageSize) {
        def criteria = entityManager.getCriteriaBuilder().createQuery(T.class)
        def entityRoot = criteria.from(T.class)
        criteria.select(entityRoot)
        def query = entityManager.createQuery(criteria)
        // If paging arguments are valid (greater than zero)
        if(page >= 0 && pageSize >= 0) {
            // then apply paging
            query.setFirstResult(page * pageSize)
            query.setMaxResults(pageSize)
        }
        query.getResultList()
    }

    void add(T entity) {
        entityManager.persist(entity)
    }

    void remove(T entity) {
        entityManager.remove(entity)
    }
}
