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

class PersonalWidgetDefinition extends Entity {

    String displayName
    int position
    boolean isAssignedToPerson = false
    boolean isFavorite = false
    boolean isLaunchDisabled = false
    boolean isVisibleForLaunch = true

    final Person person
    final WidgetDefinition widgetDefinition

    final Set<String> tags

    protected PersonalWidgetDefinition(Person person, WidgetDefinition widgetDefinition) {
        assert person, "Person is required"
        assert widgetDefinition, "Widget definition is required"
        
        this.person = person
        this.widgetDefinition = widgetDefinition
    }
}
