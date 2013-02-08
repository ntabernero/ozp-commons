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

    Iterable<T> findAll(int skip, int take) {
        def criteria = entityManager.getCriteriaBuilder().createQuery(T.class)
        def entityRoot = criteria.from(T.class)
        criteria.select(entityRoot)
        def query = entityManager.createQuery(criteria)
        // If paging arguments are valid (greater than zero)
        if(skip >= 0 && take >= 0) {
            // then apply paging
            query.setFirstResult(skip)
            query.setMaxResults(take)
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
