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
        assert isNotBlank(username), "username is required"
        this.username = username
    }

    void setFullName(String fullName) {
        assert isNotBlank(fullName), "full name is required"
        this.fullName = fullName
    }
}
