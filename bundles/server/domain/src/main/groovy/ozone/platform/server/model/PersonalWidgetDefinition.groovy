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

    final WidgetDefinition widgetDefinition

    protected PersonalWidgetDefinition(WidgetDefinition widgetDefinition) {
        assert widgetDefinition, "Widget definition is required"
        
        this.widgetDefinition = widgetDefinition
    }

    /**
     * Has many tags
     * @return
     */
    Iterable<String> getTags() {
        if (!tags)
            tags = new HashSet<String>()
        tags
    }
    /**
     * Replaces tags with new of tags
     * @param tags
     */
    void setTags(Set<String> tags) {
        this.tags = tags
    }
    private Set<String> tags
}
