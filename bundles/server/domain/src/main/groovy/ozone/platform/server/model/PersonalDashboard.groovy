package ozone.platform.server.model

class PersonalDashboard extends Dashboard {

    boolean isDefault = false //Identifies the last used dashboard, OWF starts on default dashboard if no guid provided

    final Person person

    protected PersonalDashboard(String name, String guid, int position, Person person) {
        super(name, guid, position)
        assert person, "Person is required"
        this.person = person
    }
}
