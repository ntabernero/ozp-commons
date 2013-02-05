package org.ozoneplatform.commons.server.domain.validation

import org.ozoneplatform.commons.server.domain.model.ValidationError

import java.lang.annotation.Annotation

public interface AnnotationValidator {

    ValidationError validate(String propertyName, Object value, Annotation annotation)

}