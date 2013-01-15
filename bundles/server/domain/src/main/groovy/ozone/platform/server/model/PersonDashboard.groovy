package ozone.platform.server.model

class PersonDashboard extends Dashboard {

    boolean isDefault = false //Identifies the last used dashboard, OWF starts on default dashboard if no guid provided

    protected final Person person

    protected PersonDashboard(name, guid, position, person) {
        super(name, guid, position)
        this.person = person
    }

    Person getPerson() {
        return person
    }
}
