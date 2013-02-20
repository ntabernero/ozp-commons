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

package org.ozoneplatform.commons.server.persistence.mongo.test

/**
 * This class is necessary because we need to Mock a unit of work with a
 * registerDirty method for the unit tests. Since the proxy objects use
 * dynamic typing for the unit of work variable, this should work
 *
 * A more elegant solution may be to pull the interfaces for the mongo DDD
 * patterns into their own Mongo API bundle so that the compilation order
 * could be
 *
 * 1. Mongo API
 * 2. Mongo AST
 * 3. Mongo Impl
 */
interface FakeUnitOfWork {

    void registerDirty(def entity)
}
