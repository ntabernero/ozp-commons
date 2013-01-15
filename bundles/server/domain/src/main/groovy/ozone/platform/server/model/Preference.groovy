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
        this.person = person
    }

    public void setName(String name) {
        assert isNotBlank(name), "name is required"
        this.name = name;
    }

    public void setNamespace(String namespace) {
        assert isNotBlank(namespace), "namespace is required"
        this.namespace = namespace
    }

    public void setValue(String value) {
        assert isNotBlank(value), "value is required"
        this.value = value
    }
}
