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

import org.codehaus.groovy.control.CompilePhase
import org.codehaus.groovy.tools.ast.TransformTestHelper
import org.ozoneplatform.commons.server.persistence.mongo.UnitOfWorkAwareASTTransformation
import spock.lang.Specification
import spock.lang.Unroll

@Unroll
class DescribeUnitOfWorkTransformation extends Specification {

    def mockUnitOfWork = Mock(FakeUnitOfWork)
    def subject

    def setup() {
        def invoker = new TransformTestHelper(new UnitOfWorkAwareASTTransformation(), CompilePhase.SEMANTIC_ANALYSIS)

        // Get Groovy source to experiment on
        def sourceFile = getClass().getClassLoader().getResourceAsStream("Subject.groovy").text
        assert !sourceFile.empty

        // Compile Groovy source
        def clazz = invoker.parse(sourceFile)
        subject = clazz.newInstance()

        // Mock Unit of Work to verify interaction
        mockUnitOfWork  = Mock(FakeUnitOfWork)
        subject.unitOfWork = mockUnitOfWork
    }

    def "it registers the object as dirty when #desc"(desc, action) {
        given: 'a Groovy bean compiled with the presence of our AST Transformation'

        when: "${desc}"
        action.call(subject)

        then: 'object registered as dirty with unit of work'
        (1.._) * mockUnitOfWork.registerDirty(_)

        where:
        desc | action
        'setting a Groovy generated property' | { s -> s.name = 'Johnny Marr' }
        'setting an explicitly declared property' | { s -> s.age = 50 }
        'calling a void trigger method' | { s -> s.addFan('some guy') }
    }

    def "it registers the object as dirty when calling a non-void trigger method and it returns correctly"() {
        given: 'a Groovy bean compiled with the presence of our AST Transformation'

        when: 'call a trigger method that returns some value'
        def band = subject.addBand('Modest Mouse')

        then: 'object registered as dirty with unit of work'
        (1.._) * mockUnitOfWork.registerDirty(_)

        and: 'method still returns correct value'
        band != null
        band.bandName == 'Modest Mouse'
    }

    def "it will not register the object as dirty when #desc"(desc, action) {
        given: 'a Groovy bean compiled with the presence of our AST Transformation'

        when: "${desc}"
        action.call(subject)

        then: 'unit of work was never called'
        0 * mockUnitOfWork.registerDirty(_)

        where:
        desc | action
        'setting a final property' | { s -> try { s.rocks = false } catch(ReadOnlyPropertyException ex) { } }
        'setting a static property' | { s -> s.count = s.count + 1}
    }
}
