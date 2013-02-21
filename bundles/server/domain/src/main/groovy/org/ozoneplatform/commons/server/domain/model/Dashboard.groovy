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

package org.ozoneplatform.commons.server.domain.model

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
//import groovy.transform.ToString
import org.ozoneplatform.commons.server.domain.validation.*

@javax.persistence.Entity
//@ToString(includeNames=true, ignoreNulls=true)
abstract class Dashboard extends Entity {

    @NotBlank
    String name
    String description = ''

    String layoutConfig = ''
    String floatingWidgets = ''
    int position
    boolean isLocked = false

    transient static private JsonSlurper jsonSlurper = new JsonSlurper()

    protected Dashboard() { }

    protected Dashboard(String name, int position) {
        this.name = name
        this.position = position
    }

    @Override
    List<ValidationError> validate() {
        EntityValidationAnnotationProcessor.instance.validate(this)
    }

    Object getLayoutConfigJson() {
        return jsonSlurper.parseText(layoutConfig)
    }

    void setLayoutConfigJson(Object json) {
        this.layoutConfig = JsonOutput.toJson(json)
    }

    Object getFloatingWidgetsJson() {
        return jsonSlurper.parseText(floatingWidgets)
    }

    void setFloatingWidgetsJson(Object json) {
        this.floatingWidgets = JsonOutput.toJson(json)
    }
}
