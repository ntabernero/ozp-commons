package ozone.platform.server.model

class PersonDashboard extends Dashboard {

    protected Person user

    protected PersonDashboard(name, guid, isDefault, dashboardPosition, alteredByAdmin, user) {
        super(name, guid, isDefault, dashboardPosition, alteredByAdmin)
        this.user = user
    }

    Person getUser() {
        return user
    }
}
