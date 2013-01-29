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

class Stack extends AbstractGroup {

    String urlName //Changed from stackContext
    String descriptorUrl

    final Set<Group> groups

    Stack(String name, String urlName) {
        super(name)
        setUrlName(urlName)
    }

    void setUrlName(String urlName) {
        assert isNotBlank(urlName), "URL name is required"
        this.urlName = urlName
    }
}