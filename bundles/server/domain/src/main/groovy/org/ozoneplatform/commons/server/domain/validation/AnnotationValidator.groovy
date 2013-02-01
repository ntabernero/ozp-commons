package org.ozoneplatform.commons.server.domain.validation

import ozone.platform.server.model.ValidationError

import java.lang.annotation.Annotation

public interface AnnotationValidator {

    ValidationError validate(String propertyName, Object value, Annotation annotation)

}