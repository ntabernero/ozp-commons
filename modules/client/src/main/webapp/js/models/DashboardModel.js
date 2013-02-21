/*
 * Copyright 2013 Next Century Corporation 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    'models/Model',
    'lodash'
],
function(Model, _) {
    'use strict';
    
    var DashboardModel = Model.extend({

        idAttribute: "id",
        
        defaults: function() {
            return {
                name: null,
                description: null,
                position: 0,
                created: null,
                lastModified: null,
                createdBy: null,
                lastModifiedBy: null,
                layoutConfig: {
                    vtype: 'tabbedpane',
                    paneType: 'tabbedpane'
                },
                floatingWidgets: [],
                backgroundWidgets: [],
                isLocked: false
            };
        },

        initialize: function () {
            Model.prototype.initialize.apply(this, arguments);

            var layoutConfig = this.get('layoutConfig');
            if( layoutConfig.xtype ) {
                this.set('layoutConfig', this.upgradeLayoutConfig(layoutConfig), { silent: true });
            }
        },

        // upgrades previous old layoutConfig to work with new design
        upgradeLayoutConfig: function (layoutConfig, parentLayout) {
            var config;

            // hbox or vbox
            if(layoutConfig.xtype === 'container') {
                config = {
                    vtype: 'boxpane',
                    paneType: 'tabbedpane',
                    box: {
                        vtype: layoutConfig.layout.type,
                        paneType: 'tabbedpane',
                        panes: [
                            this.upgradeLayoutConfig( layoutConfig.items[0], layoutConfig.layout.type ),
                            this.upgradeLayoutConfig( layoutConfig.items[2], layoutConfig.layout.type ) // skip second item: dashboardsplitter
                        ]
                    }
                };
            }
            //layout pane
            else {
                config = {
                    vtype: layoutConfig.xtype,
                    paneType: layoutConfig.xtype
                };

                // only set defaultSettings if truthy
                if(layoutConfig.defaultSettings) {
                    config.defaultSettings = layoutConfig.defaultSettings;
                }

                // move floating widgets to dashboard
                var floatingWidgets = _.filter(layoutConfig.widgets, function (widget) { return !!widget.floatingWidget });
                this.set('floatingWidgets', this.get('floatingWidgets').concat(floatingWidgets));

                 // move background widgets to dashboard
                var backgroundWidgets = _.filter(layoutConfig.widgets, function (widget) { return !!widget.background });
                this.set('backgroundWidgets', this.get('backgroundWidgets').concat(backgroundWidgets));

                config.widgets = _.filter(layoutConfig.widgets, function (widget) { return (!widget.floatingWidget && !widget.background) });
            }

            var prop = parentLayout === 'hbox' ? 'width' : 'height';
            if(layoutConfig.htmlText) {
                config[prop] = layoutConfig.htmlText || '100%';
            }
            // pane inside a container
            else if(layoutConfig.flex === 1 && parentLayout) {
                config[prop] = '50%';
            }
            else {
                config[prop] = '100%';
            }
            
            return config;
        }

    });

    return DashboardModel;

});

