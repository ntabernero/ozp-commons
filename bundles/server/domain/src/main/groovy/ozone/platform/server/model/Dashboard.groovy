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

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

abstract class Dashboard extends Entity {

    String name
    String description = ''
    String layoutConfig = ''
    int position //Changed from dashboardPosition
    boolean locked = false

    protected Dashboard(String name, int position) {
        setName(name)
        this.position = position
    }

    void setName(String name) {
        assert isNotBlank(name), "Name is required"
        this.name = name
    }
}
