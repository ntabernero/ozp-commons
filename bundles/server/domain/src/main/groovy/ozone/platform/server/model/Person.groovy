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

    final Set<PersonDashboard> dashboards
    final Set<Group> groups
    final Set<PersonWidgetDefinition> personWidgetDefinitions
    final Set<Preference> preferences
    final Set<Role> authorities

    public Person(String username, String fullName) {
        setUsername(username)
        setFullName(fullName)
    }

    Dashboard createPersonDashboard(String name, String guid, int position) {
        def dashboard = new PersonDashboard(name, guid, position, this)
        dashboards.add(dashboard)

        return dashboard
    }

    PersonWidgetDefinition createPersonWidgetDefinition(widgetDefinition) {
        def personWidgetDefinition = new PersonWidgetDefinition(this, widgetDefinition)
        personWidgetDefinitions.add(personWidgetDefinition)

        return personWidgetDefinition
    }

    Preference createPreference(String name, String namespace, String value) {
        def preference = new Preference(name, namespace, value, this)
        preferences.add(preference)

        return preference
    }

    public void setUsername(String username) {
        assert isNotBlank(username), "username is required"
        this.username = username
    }

    public void setFullName(String fullName) {
        assert isNotBlank(fullName), "full name is required"
        this.fullName = fullName
    }
}
