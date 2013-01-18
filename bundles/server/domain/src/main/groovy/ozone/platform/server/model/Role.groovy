package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Role extends Entity {

    String authority
    String description

    Role(String authority) {
        setAuthority(authority)
    }

    void setAuthority(String authority) {
        assert isNotBlank(authority), "Authority is required"
        this.authority = authority
    }
}
