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

import org.ozoneplatform.commons.server.domain.validation.EntityValidationAnnotationProcessor
import org.ozoneplatform.commons.server.domain.validation.NotBlank

class Stack extends Entity {

    /**
     * Required
     */
    @NotBlank String name
    @NotBlank String urlName

    /**
     * Optional
     */
    String descriptorUrl
    String description = ''

    Stack(String name, String urlName) {
        this.name = name
        this.urlName = urlName
    }

    /**
     * Has many DashboardTemplates
     * @return
     */
    Set<DashboardTemplate> getDashboardTemplates() { Collections.unmodifiableSet(getMutableDashboardTemplates()) }
    private Set<DashboardTemplate> getMutableDashboardTemplates() {
        if (!mutableDashboardTemplates)
            mutableDashboardTemplates = new HashSet<DashboardTemplate>()
        mutableDashboardTemplates
    }
    private Set<DashboardTemplate> mutableDashboardTemplates

    void addDashboardTemplate(DashboardTemplate dashboardTemplate) {
        getMutableDashboardTemplates().add(dashboardTemplate)
        dashboardTemplate.stack = this
    }

    void removeDashboardTemplate(DashboardTemplate dashboardTemplate) {
        getMutableDashboardTemplates().remove(dashboardTemplate)
        dashboardTemplate.stack = null
    }

    @Override
    List<ValidationError> validate() {
        EntityValidationAnnotationProcessor.instance.validate(this)
    }
}