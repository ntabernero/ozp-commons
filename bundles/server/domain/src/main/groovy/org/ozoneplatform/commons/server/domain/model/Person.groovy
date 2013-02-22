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

class Person extends Principal {

    /*
     * Required
     */
    @NotBlank String username
    @NotBlank String fullName

    /*
     * Optional
     */
    String email
    Calendar lastLogin
    Calendar prevLogin // Previous lastLogin date

    Person(String username, String fullName) {
        this.username = username
        this.fullName = fullName
    }

    /**
     * Has many DashboardInstances
     * @return
     */
    Set<DashboardInstance> getDashboards() { Collections.unmodifiableSet(getMutableDashboards()) }
    private Set<DashboardInstance> getMutableDashboards() {
        if(!mutableDashboards)
            mutableDashboards = new HashSet<DashboardInstance>()
        mutableDashboards
    }
    private Set<DashboardInstance> mutableDashboards

    DashboardInstance createDashboardInstance(String name, int position) {
        def dashboard = new DashboardInstance(name, position)
        getMutableDashboards().add(dashboard)

        return dashboard
    }

    DashboardInstance createDashboardInstanceFromTemplate(DashboardTemplate template) {
        def dashboard = new DashboardInstance(template)
        getMutableDashboards().add(dashboard)

        return dashboard
    }

    /**
     * Has many PersonalWidgetDefinitions
     * @return
     */
    Set<PersonalWidgetDefinition> getPersonalWidgetDefinitions() { Collections.unmodifiableSet(mutablePersonalWidgetDefinitions) }
    private Set<PersonalWidgetDefinition> getMutablePersonalWidgetDefinitions() {
        if(!mutablePersonalWidgetDefinitions)
            mutablePersonalWidgetDefinitions = new HashSet<PersonalWidgetDefinition>()
        mutablePersonalWidgetDefinitions
    }
    private Set<PersonalWidgetDefinition> mutablePersonalWidgetDefinitions


    PersonalWidgetDefinition createPersonalWidgetDefinition(WidgetDefinition widgetDefinition) {
        def personalWidgetDefinition = new PersonalWidgetDefinition(widgetDefinition)
        getMutablePersonalWidgetDefinitions().add(personalWidgetDefinition)

        return personalWidgetDefinition
    }

    // Keep login setters protected since updates should be made through recordLogin
    protected void setLastLogin(Calendar cal) { this.lastLogin = cal }
    protected void setpreviousLogin(Calendar cal) { this.prevLogin = cal }

    /**
     * Update both login tracking properties
     * Sets prevLogin to lastLogin and then sets lastLogin to now
     */
    void recordLogin() {
        this.prevLogin = this.lastLogin
        this.lastLogin = Calendar.getInstance();
    }

    @Override
    List<ValidationError> validate() {
        def errors = EntityValidationAnnotationProcessor.instance.validate(this)

        // Validate email address
        if(email && !(email ==~ /^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/)) {
            errors << new ValidationError('email', "${email} is not a valid email address")
        }

        errors
    }
}
