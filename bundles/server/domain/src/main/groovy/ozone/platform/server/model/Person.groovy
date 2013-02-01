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

class Person extends Entity {

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

    final Set<Role> authorities
    final Set<Group> groups
    final Set<PersonalDashboard> dashboards
    final Set<PersonalWidgetDefinition> personalWidgetDefinitions
    final Set<Preference> preferences
    final Set<Stack> stacks

    Person(String username, String fullName) {
        this.username = username
        this.fullName = fullName
    }

    Dashboard createPersonalDashboard(String name, int position) {
        def dashboard = new PersonalDashboard(name, position, this)
        dashboards.add(dashboard)

        return dashboard
    }

    PersonalWidgetDefinition createPersonalWidgetDefinition(widgetDefinition) {
        def personalWidgetDefinition = new PersonalWidgetDefinition(this, widgetDefinition)
        personalWidgetDefinitions.add(personalWidgetDefinition)

        return personalWidgetDefinition
    }

    Preference createPreference(String name, String namespace, String value) {
        def preference = new Preference(name, namespace, value)

        // Replace old preference with new value object
        removePreference(preference)
        preferences.add(preference)

        return preference
    }

    void removePreference(Preference preference) {
        preferences.remove(preference)
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
