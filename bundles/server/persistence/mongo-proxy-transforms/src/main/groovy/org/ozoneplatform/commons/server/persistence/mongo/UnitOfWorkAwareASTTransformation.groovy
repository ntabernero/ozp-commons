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

import org.codehaus.groovy.ast.ASTNode
import org.codehaus.groovy.ast.AnnotationNode
import org.codehaus.groovy.ast.ClassNode
import org.codehaus.groovy.ast.FieldNode
import org.codehaus.groovy.ast.MethodNode
import org.codehaus.groovy.ast.PropertyNode
import org.codehaus.groovy.ast.builder.AstBuilder
import org.codehaus.groovy.ast.stmt.BlockStatement
import org.codehaus.groovy.ast.stmt.Statement
import org.codehaus.groovy.control.CompilePhase
import org.codehaus.groovy.control.SourceUnit
import org.codehaus.groovy.runtime.MetaClassHelper
import org.codehaus.groovy.transform.AbstractASTTransformation
import org.codehaus.groovy.transform.GroovyASTTransformation

import java.util.regex.Pattern

@GroovyASTTransformation(phase = CompilePhase.SEMANTIC_ANALYSIS)
class UnitOfWorkAwareASTTransformation extends AbstractASTTransformation {

    @Override
    void visit(ASTNode[] astNodes, SourceUnit sourceUnit) {
        if (!astNodes) return
        if (!astNodes[0]) return
        if (!astNodes[1]) return
        if (!(astNodes[0] instanceof AnnotationNode)) return
        if (astNodes[0].classNode?.name != UnitOfWorkAware.class.name) return
        if (!(astNodes[1] instanceof ClassNode)) return

        ClassNode classNode = (ClassNode)astNodes[1]

        def triggerMethodRegexs = getMemberList(astNodes[0], 'includeMethods')
        def triggerMethods = findTriggerMethods(classNode, triggerMethodRegexs)

        createMarkDirtyMethod(classNode)
        createPropertyTriggers(classNode)
        wrapMethodTriggers(triggerMethods)
        createUnitOfWorkField(classNode)
        createUnitOfWorkProperty(classNode)
    }

    private List<MethodNode> findTriggerMethods(ClassNode proxyNode, List<String> regexs) {
        def methods = []
        regexs.each {
            def pattern = Pattern.compile(it)
            proxyNode.methods.each {
                if(it.name ==~ pattern)
                    methods.add(it)
            }
        }
        methods
    }

    private void wrapMethodTriggers(List<MethodNode> methods) {
        methods.each {
            if(it.returnType == Void.TYPE)
                wrapVoidMethod(it)
            else {
                // Assume that we can put our markDirty call just before the last statement
                def block // Method will now have this block statement
                if (it.code instanceof BlockStatement){
                    // Method is already a block, assume we can markDirty() just before last statement
                    BlockStatement originalBlock = (BlockStatement)it.code
                    originalBlock.statements.add(originalBlock.statements.size() - 1, makeRegisterDirtyStatement())
                    block = originalBlock
                } else {
                    // Method is not a block so add markDirty() first
                    block = new BlockStatement()
                    block.addStatement(makeRegisterDirtyStatement())
                    block.addStatement(it.code)
                }
                it.code = block
            }
        }
    }

    private void createUnitOfWorkField(ClassNode proxyNode) {
        def field = new FieldNode('unitOfWork', FieldNode.ACC_PRIVATE, new ClassNode(Object.class), proxyNode, null)
        field.dynamicTyped = true
    }

    private void createUnitOfWorkProperty(ClassNode proxyNode) {
        proxyNode.addProperty('unitOfWork', PropertyNode.ACC_PUBLIC, new ClassNode(Object.class), null, null, null)
    }

    private void createMarkDirtyMethod(ClassNode proxyNode) {
        def ast = new AstBuilder().buildFromSpec {
            method('markDirty', MethodNode.ACC_PUBLIC, Void.TYPE) {
                parameters { }
                exceptions { }
                block {
                    expression {
                        methodCall {
                            variable 'unitOfWork'
                            constant 'registerDirty'
                            argumentList {
                                variable 'this'
                            }
                        }
                    }
                }
            }
        }
        def markDirtyMethod = ast[0]

        proxyNode.addMethod(markDirtyMethod)
    }

    private void createPropertyTriggers(ClassNode proxyNode) {
        proxyNode.properties.each {
            FieldNode fieldNode = it.field
            // Only augment non static, non final fields
            if(!fieldNode.isStatic() && (fieldNode.modifiers & FieldNode.ACC_FINAL) == 0) {
                def setter = proxyNode.getSetterMethod("set${MetaClassHelper.capitalize(it.name)}")
                if (setter != null) {
                    wrapVoidMethod(setter)
                } else {
                    proxyNode.addMethod(createSetterMethod(it))
                }
            }
        }
    }

    private MethodNode createSetterMethod(PropertyNode propertyNode) {
        def ast = new AstBuilder().buildFromSpec {
            method("set${MetaClassHelper.capitalize(propertyNode.name)}", MethodNode.ACC_PUBLIC, Void.TYPE) {
                parameters {
                    parameter 'value': propertyNode.type.typeClass
                }
                exceptions { }
                block {
                    expression {
                        binary {
                            variable propertyNode.name
                            token '='
                            variable 'value'
                        }
                    }
                }
            }
        }
        MethodNode method = ast[0]
        method.getCode().addStatement(makeRegisterDirtyStatement())
        method
    }

    private void wrapVoidMethod(MethodNode setter) {
        // replace setter with new block
        def block = new BlockStatement()
        // block's first instructions are the same
        block.addStatement(setter.code)
        // and add a call to register dirty
        block.addStatement(makeRegisterDirtyStatement())
        setter.code = block
    }

    private Statement makeRegisterDirtyStatement() {
        def ast = new AstBuilder().buildFromSpec {
            expression {
                methodCall {
                    variable 'this'
                    constant 'markDirty'
                    argumentList { }
                }
            }
        }
        ast[0]
    }
}
