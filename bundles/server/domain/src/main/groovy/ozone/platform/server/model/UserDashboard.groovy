package ozone.platform.server.model

class UserDashboard extends Dashboard {

    protected User user

    protected UserDashboard(name, guid, isDefault, dashboardPosition, alteredByAdmin, user) {
        super(name, guid, isDefault, dashboardPosition, alteredByAdmin)
        this.user = user
    }

    User getUser() {
        return user
    }
}
