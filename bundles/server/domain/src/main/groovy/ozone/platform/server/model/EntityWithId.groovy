package ozone.platform.server.model

/**
 * Base class for persistence entities.
 * Entities: http://martinfowler.com/bliki/EvansClassification.html
 *
 * May be expanded upon to include a common way of doing comparisons by ID
 * @param < T >
 */
abstract class EntityWithId<T extends Comparable> implements Serializable {

    T id
}
