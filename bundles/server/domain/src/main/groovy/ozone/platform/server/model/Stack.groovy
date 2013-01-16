package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Stack extends AbstractGroup {

    String urlName //Changed from stackContext
    String descriptorUrl

    final Set<Group> groups

    Stack(String name, String urlName) {
        super(name)
        setUrlName(urlName)
    }

    void setUrlName(String urlName) {
        assert isNotBlank(urlName), "url name is required"
        this.username = username
    }
}