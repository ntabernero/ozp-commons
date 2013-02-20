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
package org.ozoneplatform.commons.server.persistence.mongo.proxy

import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.persistence.mongo.UnitOfWork

class PersonProxy extends Person implements GroovyInterceptable{

    def triggerProperties = ['username', 'fullName', 'email', 'prevLogin', 'lastLogin']
    def triggerMethods = [
            'createDashboardInstance',
            'createDashboardInstanceFromTemplate',
            'removeDashboardInstance',
            'createPersonalWidgetDefinition',
            'removePersonalWidgetDefinition',
            'setPreference',
            'removePreference',
            'addStack',
            'removeStack'
    ]

    def invokeMethod(String name, args) {
        if (triggerMethods.contains(name))
            markDirty()
        super.invokeMethod(name, args)
    }

    void setProperty(String name, value) {
        if (triggerProperties.contains(name))
            markDirty()
        super.setProperty(name, value)
    }

    // *************************************************

    UnitOfWork unitOfWork

    private void markDirty() {
        if (unitOfWork)
            unitOfWork.registerDirty(this)
    }
}

