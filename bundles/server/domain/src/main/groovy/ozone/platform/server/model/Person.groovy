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

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Person extends Entity {

    /*
     * Required
     */
    String username
    String fullName //Changed from userRealName

    /*
     * Optional
     */
    String email
    Calendar lastLogin
    Calendar prevLogin //Previous lastLogin date

    final Set<PersonalDashboard> dashboards
    final Set<Group> groups
    final Set<PersonalWidgetDefinition> personalWidgetDefinitions
    final Set<Preference> preferences
    final Set<Role> authorities

    Person(String username, String fullName) {
        setUsername(username)
        setFullName(fullName)
    }

    Dashboard createPersonalDashboard(String name, String guid, int position) {
        def dashboard = new PersonalDashboard(name, guid, position, this)
        dashboards.add(dashboard)

        return dashboard
    }

    PersonalWidgetDefinition createPersonalWidgetDefinition(widgetDefinition) {
        def personalWidgetDefinition = new PersonalWidgetDefinition(this, widgetDefinition)
        personalWidgetDefinitions.add(personalWidgetDefinition)

        return personalWidgetDefinition
    }

    Preference createPreference(String name, String namespace, String value) {
        def preference = new Preference(name, namespace, value, this)
        preferences.add(preference)

        return preference
    }

    void setUsername(String username) {
        assert isNotBlank(username), "Username is required"
        this.username = username
    }

    void setFullName(String fullName) {
        assert isNotBlank(fullName), "Full name is required"
        this.fullName = fullName
    }

    void setEmail(String email) {
        assert email ==~ /^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/, "${email} is not a valid email"
        this.email = email
    }

    // Keep login setters protected since updates should be made through recordLogin
    protected void setLastLogin(Calendar cal) { lastLogin = cal }
    protected void setpreviousLogin(Calendar cal) { prevLogin = cal }

    /**
     * Update both login tracking properties
     * Sets prevLogin to lastLogin and then sets lastLogin to now
     */
    void recordLogin() {
        prevLogin = lastLogin
        lastLogin = Calendar.getInstance();
    }
}
