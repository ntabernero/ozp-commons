package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Preference extends Entity {

    String name // renamed path to name to match user interface
    String namespace
    String value

    final Person person

    protected Preference(String name, String namespace, String value, Person person) {
        setName(name)
        setNamespace(namespace)
        setValue(value)

        assert person, "Person is required"
        this.person = person
    }

    void setName(String name) {
        assert isNotBlank(name), "Name is required"
        this.name = name
    }

    void setNamespace(String namespace) {
        assert isNotBlank(namespace), "Namespace is required"
        this.namespace = namespace
    }

    void setValue(String value) {
        assert isNotBlank(value), "Value is required"
        this.value = value
    }
}
