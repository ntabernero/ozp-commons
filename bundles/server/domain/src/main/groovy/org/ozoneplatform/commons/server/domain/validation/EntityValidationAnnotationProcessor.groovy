package org.ozoneplatform.commons.server.domain.validation

import org.ozoneplatform.commons.server.domain.model.ValidationError

/**
 * Scans an object for domain validation annotations and processes annotated fields with the annotation's
 * respective AnnotationValidator. For example, will find all NotBlank annotations and process those fields with
 * the NotBlankAnnotationValidator. Keeps a hash map of Annotation => AnnotationValidator
 *
 * Follows singleton pattern for performance
 */
class EntityValidationAnnotationProcessor {

    private static EntityValidationAnnotationProcessor instance
    public static EntityValidationAnnotationProcessor getInstance() {
        if (instance == null)
            instance = new EntityValidationAnnotationProcessor()
        instance
    }

    private EntityValidationAnnotationProcessor() { }

    private LinkedHashMap<Class, AnnotationValidator> processors = [
            (NotBlank): new NotBlankAnnotationValidator()
    ]

    List<ValidationError> validate(def obj) {
        def errors = []

        obj.class.declaredFields.each { field ->
            field.setAccessible(true)
            field.declaredAnnotations.each {
                def validationError = processors[it.annotationType()]?.validate(field.name, field.get(obj), it)
                if (validationError) errors << validationError
            }
        }

        return errors
    }
}
