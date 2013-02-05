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
abstract class Principal extends Entity {

    /**
     * Has many Preferences
     * @return
     */
    Iterable<Preference> getPreferences() { getMutablePreferences() }
    private Set<Preference> getMutablePreferences() {
        if (!mutablePreferences)
            mutablePreferences = new HashSet<Preference>()
        mutablePreferences
    }
    private Set<Preference> mutablePreferences

    /**
     * Creates a new preference or replaces an existing one with the new value
     * @param name
     * @param namespace
     * @param value
     * @return
     */
    Preference setPreference(String name, String namespace, String value) {
        def preference = new Preference(name, namespace, value)

        // Replace old preference with new value object
        removePreference(preference)
        getMutablePreferences().add(preference)

        return preference
    }

    /**
     * Removes a preference with the same (namespace, name) pair
     * @param preference
     */
    void removePreference(Preference preference) {
        getMutablePreferences().remove(preference)
    }

    /**
     * Has many Stacks
     * @return
     */
    Iterable<Stack> getStacks() { getMutableStacks() }
    private Set<Stack> getMutableStacks() {
        if (!mutableStacks)
            mutableStacks = new HashSet<Stack>()
        mutableStacks
    }
    private Set<Stack> mutableStacks

    void addStack(Stack stack) {
        getMutableStacks().add(stack)
    }

    void removeStack(Stack stack) {
        getMutableStacks().remove(stack)
    }
}
