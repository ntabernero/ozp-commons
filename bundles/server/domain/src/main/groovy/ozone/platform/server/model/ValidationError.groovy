package ozone.platform.server.model

class ValidationError {

    ValidationError() { }

    ValidationError(String property, String validationMessage) {
        this.property = property
        this.validationMessage = validationMessage
    }

    /**
     * Name of the property which causes an object to be invalid
     */
    String property

    /**
     * Human readable explanation why this property is invalid
     */
    String validationMessage
}
