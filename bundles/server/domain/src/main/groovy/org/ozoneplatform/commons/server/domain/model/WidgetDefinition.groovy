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

@javax.persistence.Entity
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
    String version

    /*
     * Defaults to value
     */
    int height = MINIMUM_WIDGET_HEIGHT
    int width = MINIMUM_WIDGET_WIDTH
    boolean isBackground = false
    boolean isSingleton = false
    boolean isVisibleForLaunch = true

    /**
     * WidgetDefinition has many required properties making construction
     * a complex operation. Too many arguments in the constructor is a confusing API.
     * Mitigate this complexity with the builder pattern.
     */
    static WidgetDefinitionBuilder builder() {
        return new WidgetDefinitionBuilder()
    }

    protected WidgetDefinition() { }

    public WidgetDefinition(String displayName, String widgetUrl, String imageUrlSmall, String imageUrlLarge, String widgetType) {
        this.displayName = displayName
        this.widgetUrl = widgetUrl
        this.imageUrlSmall = imageUrlSmall
        this.imageUrlLarge = imageUrlLarge
        this.widgetType = widgetType

        mutableGroups = new HashSet<Group>()
        mutableReceivableIntents = new HashSet<Intent>()
        mutableSendableIntents = new HashSet<Intent>()
    }

    /**
     * Is contained in many groups
     * This back reference is provided as an optimization for the widget launcher
     * @return
     */
    Set<Group> getGroups() { Collections.unmodifiableSet(mutableGroups) }
    private Set<Group> mutableGroups

    /**
     * Has many required WidgetDefinitions
     * TODO Open this up as a public API for managing WidgetDefinition dependencies when more is known about this feature
     */
    private Set<WidgetDefinition> requiredWidgets // Widgets required by this widget

    /**
     * Has many Tags
     * @return
     */
    Set<String> getTags() {
        Collections.unmodifiableSet(tags)
    }
    /**
     * Replaces set of tags with a new set
     * @param tags
     */
    void setTags(Set<String> tags) {
        this.tags = tags
    }
    private Set<String> tags

    /**
     * Sends many Intents
     * @return
     */
    Set<Intent> getSendableIntents() { Collections.unmodifiableSet(mutableSendableIntents) }
    private Set<Intent> mutableSendableIntents

    void addSendableIntent(Intent intent) {
        mutableSendableIntents.add(intent)
    }

    void removeSendableIntent(Intent intent) {
        mutableSendableIntents.remove(intent)
    }

    /**
     * Receives many Intents
     * @return
     */
    Set<Intent> getReceivableIntents() { Collections.unmodifiableSet(mutableReceivableIntents) }
    private Set<Intent> mutableReceivableIntents

    void addReceivableIntent(Intent intent) {
        mutableReceivableIntents.add(intent)
    }

    void removeReceivableIntent(Intent intent) {
        mutableReceivableIntents.remove(intent)
    }

    @Override
    List<ValidationError> validate() {
        def errors = EntityValidationAnnotationProcessor.instance.validate(this)

        if (width < MINIMUM_WIDGET_WIDTH) errors << new ValidationError("width", "Width must be at least ${MINIMUM_WIDGET_WIDTH}")
        if (height < MINIMUM_WIDGET_HEIGHT) errors << new ValidationError("height", "Height must be at least ${MINIMUM_WIDGET_HEIGHT}")

        errors
    }
}
