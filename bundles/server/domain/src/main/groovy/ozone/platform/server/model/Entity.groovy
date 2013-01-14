package ozone.platform.server.model

/**
 * It's likely that all Entities will share the same type of ID so Entities should use
 * this class for their base class. Should Ozone switch the type of its identifiers (e.g.
 * long to GUID) then only this base needs to be changed
 * @param < Long >
 */
abstract class Entity<Long> extends EntityWithId {
}