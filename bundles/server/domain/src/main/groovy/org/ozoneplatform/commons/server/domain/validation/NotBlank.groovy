package org.ozoneplatform.commons.server.domain.validation

import static org.ozoneplatform.commons.server.domain.validation.ValidationHelpers.isBlank

import org.ozoneplatform.commons.server.domain.model.ValidationError

import java.lang.annotation.*

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