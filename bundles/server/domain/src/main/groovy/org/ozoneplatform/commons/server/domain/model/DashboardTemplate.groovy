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

import groovy.transform.ToString

/**
 * A DashboardTemplate can belong to either a stack or any number of groups (never both).
 * It is never used directly and is only copied into DashboardInstances which are used.
 */
@ToString(includeSuper=true, includeNames=true, ignoreNulls=true)
class DashboardTemplate extends Dashboard {

    DashboardTemplate(String name, int position) {
        super(name, position)
    }

    /**
     * Has many WidgetDefinitions
     * @return
     */
    Set<WidgetDefinition> getWidgetDefinitions() { Collections.unmodifiableSet(getMutableWidgetDefinitions()) }
    private Set<WidgetDefinition> getMutableWidgetDefinitions() {
        if(!mutableWidgetDefinitions)
            mutableWidgetDefinitions = new HashSet<WidgetDefinition>()
        mutableWidgetDefinitions
    }
    private Set<WidgetDefinition> mutableWidgetDefinitions // Unique widgets in layoutConfig, when layoutConfig updated this must be synced

    /**
     * Is contained in many groups
     * This back reference is provided as an optimization so the
     * tool tip, which is displayed when the user hovers over a dashboard in
     * the switcher, may list the groups this dashboard is a part of
     * @return
     */
    Set<Group> getGroups() { Collections.unmodifiableSet(getMutableGroups()) }
    protected Set<Group> getMutableGroups() {
        if (!mutableGroups)
            mutableGroups = new HashSet<Group>()
        mutableGroups
    }
    private Set<Group> mutableGroups

    /**
     * Is contained in at most one stack
     * This back references is provided as an optimization for the
     * dashboard switcher so that it may aggregate dashboards in stacks
     * with just one call
     * @return
     */
    Stack getStack() { stack }
    protected Stack stack
}
