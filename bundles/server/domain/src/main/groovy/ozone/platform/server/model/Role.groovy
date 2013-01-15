package ozone.platform.server.model

class Role extends Entity {

    String authority
    String description

    final Set<Person> people
}
