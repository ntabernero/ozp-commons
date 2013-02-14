/* 
   Copyright 2013 Next Century Corporation 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

package org.ozoneplatform.commons.server.domain.model

/**
 * Abstracts commonalities between Person and Group.
 */
@javax.persistence.Entity
abstract class Principal extends Entity {

    public Principal() {
        mutablePreferences = new HashSet<Preference>()
        mutableStacks = new HashSet<Stack>()
    }

    /**
     * Has many Preferences
     * @return
     */
    Set<Preference> getPreferences() { Collections.unmodifiableSet(mutablePreferences) }
    private Set<Preference> mutablePreferences

    /**
     * Creates a new preference or replaces an existing one with the new value
     * @param namespace
     * @param name
     * @param value
     * @return
     */
    Preference setPreference(String namespace, String name, String value) {
        def preference = new Preference(namespace, name, value)

        // Replace old preference with new value object
        removePreference(preference)
        mutablePreferences.add(preference)

        return preference
    }

    /**
     * Removes a preference with the same (namespace, name) pair
     * @param preference
     */
    void removePreference(Preference preference) {
        mutablePreferences.remove(preference)
    }

    /**
     * Has many Stacks
     * @return
     */
    Set<Stack> getStacks() { Collections.unmodifiableSet(mutableStacks) }
    private Set<Stack> mutableStacks

    void addStack(Stack stack) {
        mutableStacks.add(stack)
    }

    void removeStack(Stack stack) {
        mutableStacks.remove(stack)
    }
}
