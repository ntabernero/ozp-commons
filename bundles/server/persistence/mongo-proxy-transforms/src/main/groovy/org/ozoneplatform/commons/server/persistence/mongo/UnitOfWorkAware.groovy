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

package org.ozoneplatform.commons.server.persistence.mongo

import org.codehaus.groovy.transform.GroovyASTTransformationClass

import java.lang.annotation.ElementType
import java.lang.annotation.Retention
import java.lang.annotation.RetentionPolicy
import java.lang.annotation.Target

/**
 * Proxy classes marked with @UnitOfWorkAware will register their instances as dirty with the unit of work when
 * any of their non-static, non-final properties are updated. Optionally, will register as dirty
 * before any of the methods which match a regular expression in 'includeMethods' returns
 * Adds a property to hold the unit of work
 */
@Retention(RetentionPolicy.SOURCE)
@Target([ElementType.TYPE])
@GroovyASTTransformationClass(['org.ozoneplatform.commons.server.persistence.mongo.UnitOfWorkAwareASTTransformation'])
public @interface UnitOfWorkAware {
    /**
     * May include a list of regular expressions which match method names in the class
     * decorated by this annotation. Methods which match any one of the regular expressions
     * will mark the object as dirty in the unit of work before returning
     * @return
     */
    String[] includeMethods() default [];
}
