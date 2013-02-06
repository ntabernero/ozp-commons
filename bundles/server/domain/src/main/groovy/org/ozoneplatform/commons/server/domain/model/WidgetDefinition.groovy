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

    public WidgetDefinition(String displayName, String widgetUrl, String imageUrlSmall, String imageUrlLarge, String widgetType) {
        this.displayName = displayName
        this.widgetUrl = widgetUrl
        this.imageUrlSmall = imageUrlSmall
        this.imageUrlLarge = imageUrlLarge
        this.widgetType = widgetType
    }

    /**
     * Is contained in many groups
     * This back reference is provided as an optimization for the widget launcher
     * @return
     */
    Iterable<Group> getGroups() { groups }
    private void setGroups(Set<Group> groups) {
        this.groups = groups
    }
    private Set<Group> groups

    /**
     * Has many required WidgetDefinitions
     * TODO Open this up as a public API for managing WidgetDefinition dependencies when more is known about this feature
     */
    private Set<WidgetDefinition> requiredWidgets // Widgets required by this widget

    /**
     * Has many Tags
     * @return
     */
    Iterable<String> getTags() {
        tags
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
    Iterable<Intent> getSendableIntents() { getMutableSendableIntents() }
    private Set<Intent> getMutableSendableIntents() {
        if (!mutableSendableIntents)
            mutableSendableIntents = new HashSet<Intent>()
        mutableSendableIntents
    }
    private Set<Intent> mutableSendableIntents

    void addSendableIntent(Intent intent) {
        getMutableSendableIntents().add(intent)
    }

    void removeSendableIntent(Intent intent) {
        getMutableSendableIntents().remove(intent)
    }

    /**
     * Receives many Intents
     * @return
     */
    Iterable<Intent> getReceivableIntents() { getMutableReceivableIntents() }
    private Set<Intent> getMutableReceivableIntents() {
        if (!mutableReceivableIntents) {
            mutableReceivableIntents = new HashSet<Intent>()
        }
        mutableReceivableIntents
    }
    private Set<Intent> mutableReceivableIntents

    void addReceivableIntent(Intent intent) {
        getMutableReceivableIntents().add(intent)
    }

    void removeReceivableIntent(Intent intent) {
        getMutableReceivableIntents().remove(intent)
    }

    @Override
    List<ValidationError> validate() {
        def errors = EntityValidationAnnotationProcessor.instance.validate(this)

        if (width >= MINIMUM_WIDGET_WIDTH) errors << new ValidationError("width", "Width must be at least ${MINIMUM_WIDGET_WIDTH}")
        if (height >= MINIMUM_WIDGET_HEIGHT) errors << new ValidationError("height", "Height must be at least ${MINIMUM_WIDGET_HEIGHT}")

        errors
    }
}
