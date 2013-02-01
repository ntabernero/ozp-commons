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

import org.ozoneplatform.commons.server.domain.validation.EntityValidationAnnotationProcessor
import org.ozoneplatform.commons.server.domain.validation.NotBlank

class WidgetDefinition extends Entity {

    static final int MINIMUM_WIDGET_HEIGHT = 200
    static final int MINIMUM_WIDGET_WIDTH = 200

    /*
     * Required
     */
    @NotBlank String displayName
    @NotBlank String widgetUrl
    @NotBlank String imageUrlLarge
    @NotBlank String imageUrlSmall
    @NotBlank String widgetType

    /*
     * Optional
     */
    String universalName
    String description = ''
    String descriptorUrl
    String version //Changed from widgetVersion

    /*
     * Defaults to value
     */
    int height = MINIMUM_WIDGET_HEIGHT
    int width = MINIMUM_WIDGET_WIDTH
    boolean background = false
    boolean singleton = false
    boolean visibleForLaunch = true //Changed from visible

    /*
     * Has Many
     */
    final Set<WidgetDefinition> requiredWidgets //Widgets required by this widget
    final Set<PersonalWidgetDefinition> personalWidgetDefinitions
    final Set<String> tags
    final Set<Intent> sendableIntents
    final Set<Intent> receivableIntents

    /**
     * WidgetDefinition has many required properties making construction
     * a complex operation. Too many arguments in the constructor is a confusing API.
     * Mitigate this complexity with the builder pattern.
     */
    static WidgetDefinitionBuilder builder() {
        return new WidgetDefinitionBuilder()
    }

    protected WidgetDefinition(String displayName, String widgetUrl, String imageUrlSmall, String imageUrlLarge, String widgetType) {
        this.displayName = displayName
        this.widgetUrl = widgetUrl
        this.imageUrlSmall = imageUrlSmall
        this.imageUrlLarge = imageUrlLarge
        this.widgetType = widgetType
    }

    @Override
    List<ValidationError> validate() {
        def errors = EntityValidationAnnotationProcessor.instance.validate(this)

        if (width >= MINIMUM_WIDGET_WIDTH) errors << new ValidationError("width", "Width must be at least ${MINIMUM_WIDGET_WIDTH}")
        if (height >= MINIMUM_WIDGET_HEIGHT) errors << new ValidationError("height", "Height must be at least ${MINIMUM_WIDGET_HEIGHT}")

        errors
    }
}
