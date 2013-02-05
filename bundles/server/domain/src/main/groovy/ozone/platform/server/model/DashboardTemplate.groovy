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
 * A DashboardTemplate can belong to either a stack or any number of groups (never both).
 * It is never used directly and is only copied into DashboardInstances which are used.
 */
class DashboardTemplate extends Dashboard {

    DashboardTemplate(String name, int position) {
        super(name, position)
    }

    /**
     * Has many WidgetDefinitions
     * @return
     */
    Iterable<WidgetDefinition> getWidgetDefinitions() { getMutableWidgetDefinitions() }
    private Set<WidgetDefinition> getMutableWidgetDefinitions() {
        if(!mutableWidgetDefinitions)
            mutableWidgetDefinitions = new HashSet<WidgetDefinition>()
        mutableWidgetDefinitions
    }
    private Set<WidgetDefinition> mutableWidgetDefinitions // Unique widgets in layoutConfig, when layoutConfig updated this must be synced
}
