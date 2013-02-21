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

package org.ozoneplatform.commons.server.persistence.jpa;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

public abstract class GenericRepository<T> {

    private EntityManager entityManager;

    public EntityManager getEntityManager() {
        return entityManager;
    }

    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public GenericRepository() {
    }

    public GenericRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    protected T getById(Class<T> clazz, String id) {
        return entityManager.find(clazz, id);
    }

    protected Iterable<T> findAll(Class<T> clazz) {
        return findAll(clazz, -1, -1);
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
    protected Iterable<T> findAll(Class<T> clazz, int page, int pageSize) {
        CriteriaQuery<T> criteria = entityManager.getCriteriaBuilder().createQuery(clazz);
        Root<T> entityRoot = criteria.from(clazz);
        criteria.select(entityRoot);
        TypedQuery<T> query = entityManager.createQuery(criteria);
        // If paging arguments are valid (greater than zero)
        if(page >= 0 && pageSize >= 0) {
            // then apply paging
            query.setFirstResult(page * pageSize);
            query.setMaxResults(pageSize);
        }
        return query.getResultList();
    }

    public void add(T entity) {
        entityManager.persist(entity);
    }

    public void remove(T entity) {
        entityManager.remove(entity);
    }
}
