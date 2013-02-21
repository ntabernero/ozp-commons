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
    'models/DashboardModel',
    './../dashboards.js',
    'lodash'
], function(Dashboard, Dashboards, _) {

    function collectFromPanes(layoutConfig, prop) {
        var val = [];
        if(layoutConfig.xtype === 'container') {
            val = val.concat( collectFromPanes(layoutConfig.items[0], prop) || [] );
            val = val.concat( collectFromPanes(layoutConfig.items[2], prop) || [] );
        }
        //layout pane
        else {
            return layoutConfig[ prop ];
        }
        return val;
    }

    describe('Dashboard model', function() {
        
        it('has one tabbed pane by default', function () {
            var dashboard = new Dashboard(),
                layoutConfig = dashboard.get('layoutConfig');

            expect(layoutConfig.vtype).to.be('tabbedpane');
            expect(layoutConfig.paneType).to.be('tabbedpane');
        })

        it('upgrades layout only when necessary', function () {
            var dashboard = new Dashboard(),
                spy = sinon.spy(dashboard, 'upgradeLayoutConfig');

            dashboard.initialize();
            expect(spy.calledOnce).to.not.be.ok();
            
            dashboard.set('layoutConfig', {
                xtype: 'desktoppane'
            });
            dashboard.initialize();
            expect(spy.calledOnce).to.be.ok();
        });

        it('upgrades layoutConfig', function () {
            _.each(Dashboards.oldLayoutConfigs, function (layoutConfig, index) {
                var dashboard = new Dashboard({layoutConfig: layoutConfig});
                expect(_.isEqual(dashboard.get('layoutConfig'), Dashboards.expectedLayoutConfigs[index])).to.be.ok();
                
                var backgroundWidgets = _.filter( collectFromPanes(layoutConfig, 'widgets'), function(w) { return !!w.background } );
                expect(_.isEqual( dashboard.get('backgroundWidgets'), backgroundWidgets )).to.be.ok();

                var floatingWidgets = _.filter( collectFromPanes(layoutConfig, 'widgets'), function(w) { return !!w.floatingWidget } );
                expect(_.isEqual( dashboard.get('floatingWidgets'), floatingWidgets )).to.be.ok();
            });
        })



    });
});
