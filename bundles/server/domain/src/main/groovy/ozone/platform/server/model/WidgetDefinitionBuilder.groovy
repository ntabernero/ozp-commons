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
 * Provide a fluent interface for building new WidgetDefinition entities
 * which require a lot of required properties
 */
class WidgetDefinitionBuilder {

    private String name
    private String guid
    private String url
    private String imageUrlSmall
    private String imageUrlLarge
    private String widgetType

    protected WidgetDefinitionBuilder() { }

    WidgetDefinitionBuilder withDisplayName(String name) {
        this.name = name
        return this
    }

    WidgetDefinitionBuilder withGuid(String guid) {
        this.guid = guid
        return this
    }

    WidgetDefinitionBuilder withUrl(String widgetUrl) {
        this.url = widgetUrl
        return this
    }

    WidgetDefinitionBuilder withImageUrlSmall(String imageUrlSmall) {
        this.imageUrlSmall = imageUrlSmall
        return this
    }

    WidgetDefinitionBuilder withImageUrlLarge(String imageUrlLarge) {
        this.imageUrlLarge = imageUrlLarge
        return this
    }

    WidgetDefinitionBuilder withWidgetType(String widgetType) {
        this.widgetType = widgetType
        return this
    }

    WidgetDefinition build() {
        def widgetDefinition = new WidgetDefinition(
                guid,
                name,
                url,
                imageUrlSmall,
                imageUrlLarge,
                widgetType)
        return widgetDefinition
    }
}
