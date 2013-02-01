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
 * It is never used directly and is only copied into PersonalDashboards which are used.
 */
class DashboardTemplate extends Dashboard {

    final String author

    final Calendar created
    Calendar lastModified
    
    // Only one of these may be assigned at a time, DashboardTemplate may belong to
    // either a stack OR any number of groups
    final Stack stack
    final Set<Group> groups

    final Set<PersonalDashboard> personalDashboards // Personal dashboards copied from this
    final Set<WidgetDefinition> widgets // Unique widgets in layoutConfig, when layoutConfig updated this must be synced

    DashboardTemplate(String name, int position, String author) {
        super(name, position)

        this.author = author
        this.created = Calendar.getInstance();
    }

    // Keep lastModified setter protected since updates should be made through modified
    protected void setLastLogin(Calendar cal) { this.lastLogin = cal }

    void modified() {
        this.lastModified = Calendar.getInstance();
    }
}
