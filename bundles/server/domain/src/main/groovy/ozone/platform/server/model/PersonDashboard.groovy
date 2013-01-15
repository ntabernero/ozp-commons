package ozone.platform.server.model

class PersonDashboard extends Dashboard {

    boolean isDefault = false //Identifies the last used dashboard, OWF starts on default dashboard if no guid provided

    final Person person

    protected PersonDashboard(String name, String guid, int position, Person person) {
        super(name, guid, position)
        this.person = person
    }
}
