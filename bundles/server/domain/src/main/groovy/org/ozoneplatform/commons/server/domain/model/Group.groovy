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

import org.ozoneplatform.commons.server.domain.validation.EntityValidationAnnotationProcessor
import org.ozoneplatform.commons.server.domain.validation.NotBlank

class Group extends Principal {

    @NotBlank
    String name
    String displayName
    String description = ''
    boolean isPermissionsActive = true // If people will have access to group's dashboards, stacks, and widgets
    boolean isAutomatic = false // If people will be automatically handled by external sources

    Group(String name) {
        this.name = name
        this.displayName = name
    }

    /**
     * Has many Persons
     * @return
     */
    Set<Person> getPersons() { Collections.unmodifiableSet(getMutablePersons()) }
    private Set<Person> getMutablePersons() {
        if (!mutablePersons)
            mutablePersons = new HashSet<Person>()
        mutablePersons
    }
    private Set<Person> mutablePersons

    void addPerson(Person person) {
        getMutablePersons().add(person)
    }

    void removePerson(Person person) {
        getMutablePersons().remove(person)
    }

    /**
     * Has many WidgetDefinitions
     * @return
     */
    Set<WidgetDefinition> getWidgetDefinitions() { Collections.unmodifiableSet(getMutableWidgetDefinitions()) }
    private Set<WidgetDefinition> getMutableWidgetDefinitions() {
        if (!mutableWidgetDefinitions)
            mutableWidgetDefinitions = new HashSet<WidgetDefinition>()
        mutableWidgetDefinitions
    }
    private Set<WidgetDefinition> mutableWidgetDefinitions

    void addWidgetDefinition(WidgetDefinition widgetDefinition) {
        getMutableWidgetDefinitions().add(widgetDefinition)
        widgetDefinition.mutableGroups.add(this)
    }

    void removeWidgetDefinition(WidgetDefinition widgetDefinition) {
        getMutableWidgetDefinitions().remove(widgetDefinition)
        widgetDefinition.mutableGroups.remove(this)
    }

    Set<DashboardTemplate> getDashboardTemplates() { Collections.unmodifiableSet(getMutableDashboardTemplates()) }
    private Set<DashboardTemplate> getMutableDashboardTemplates() {
        if (!mutableDashboardTemplates)
            mutableDashboardTemplates = new HashSet<DashboardTemplate>()
        mutableDashboardTemplates
    }
    private Set<DashboardTemplate> mutableDashboardTemplates

    void addDashboardTemplate(DashboardTemplate dashboardTemplate) {
        getMutableDashboardTemplates().add(dashboardTemplate)
        dashboardTemplate.mutableGroups.add(this)
    }

    void removeDashboardTemplate(DashboardTemplate dashboardTemplate) {
        getMutableDashboardTemplates().remove(dashboardTemplate)
        dashboardTemplate.mutableGroups.remove(this)
    }

    @Override
    List<ValidationError> validate() {
        EntityValidationAnnotationProcessor.instance.validate(this)
    }
}
