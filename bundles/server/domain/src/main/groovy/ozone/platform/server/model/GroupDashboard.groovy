package ozone.platform.server.model

class GroupDashboard extends Dashboard {
    
    final Set<Group> groups

    protected GroupDashboard(String name, String guid, int position) {
        super(name, guid, position)
    }
}
