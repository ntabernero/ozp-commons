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

package ozone.platform.server.model

/**
 * Abstracts commonalities between Person and Group.
 */
abstract class Principal extends Entity {

    final Set<Preference> preferences
    final Set<Stack> stacks

    Preference createPreference(String name, String namespace, String value) {
        def preference = new Preference(name, namespace, value)

        // Replace old preference with new value object
        removePreference(preference)
        preferences.add(preference)

        return preference
    }

    void removePreference(Preference preference) {
        preferences.remove(preference)
    }
}
