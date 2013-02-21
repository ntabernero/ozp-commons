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

import org.ozoneplatform.commons.server.domain.model.Stack;
import org.ozoneplatform.commons.server.persistence.api.StackRepository;

import javax.persistence.EntityManager;

public class StackRepositoryImpl extends GenericRepository<Stack> implements StackRepository {

    public StackRepositoryImpl() {
        super();
    }

    public StackRepositoryImpl(EntityManager entityManager) {
        super(entityManager);
    }

    public Stack getById(String id) {
        return super.getById(Stack.class, id);
    }

    public Iterable<Stack> findAll() {
        return super.findAll(Stack.class);
    }

    public Iterable<Stack> findAll(int page, int pageSize) {
        return super.findAll(Stack.class, page, pageSize);
    }
}
