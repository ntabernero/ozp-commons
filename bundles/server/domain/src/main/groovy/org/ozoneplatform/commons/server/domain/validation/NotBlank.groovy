package org.ozoneplatform.commons.server.domain.validation

import ozone.platform.server.model.ValidationError

import java.lang.annotation.*

import static org.ozoneplatform.commons.server.domain.validation.ValidationHelpers.isBlank

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface NotBlank {

}

class NotBlankAnnotationValidator implements AnnotationValidator {

    @Override
    ValidationError validate(String propertyName, Object object, Annotation annotation) {
        if (isBlank(object)) return new ValidationError(property: propertyName, validationMessage: "${propertyName} is required")
    }
}