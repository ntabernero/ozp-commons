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

package ozone.platform.server.model

import org.ozoneplatform.commons.server.domain.validation.EntityValidationAnnotationProcessor
import org.ozoneplatform.commons.server.domain.validation.NotBlank

class Group extends Principal {

    @NotBlank
    String name
    String displayName
    String description = ''
    boolean isPermissionsActive = true // If people will have access to group's dashboards, stacks, and widgets
    boolean isAutomatic = false // If people will be automatically handled by external sources

    final Set<Person> people
    final Set<WidgetDefinition> widgetDefinitions

    Group(String name) {
        this.name = name
        this.displayName = name
    }

    @Override
    List<ValidationError> validate() {
        EntityValidationAnnotationProcessor.instance.validate(this)
    }
}
