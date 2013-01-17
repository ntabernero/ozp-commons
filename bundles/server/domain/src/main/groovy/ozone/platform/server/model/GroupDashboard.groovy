package ozone.platform.server.model

class GroupDashboard extends Dashboard {
    
    final Set<Group> groups

    GroupDashboard(String name, String guid, int position) {
        super(name, guid, position)
    }
}
