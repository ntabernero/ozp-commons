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

import static org.ozoneplatform.commons.server.domain.validation.ValidationHelpers.isNotBlank

@javax.persistence.Entity
class Intent {

    final String action
    final String dataType

    protected Intent() { }

    Intent(String action, String dataType) {
        assert isNotBlank(action), "Action is required"
        assert isNotBlank(dataType), "DataType is required"

        this.action = action
        this.dataType = dataType
    }

    @Override
    boolean equals(Object o) {
        if (this.is(o)) return true
        if (getClass() != o.class) return false

        Intent intent = (Intent) o

        return action == intent.action && dataType == intent.dataType
    }

    @Override
    int hashCode() {
        int result
        result = action.hashCode()
        result = 31 * result + dataType.hashCode()
        return result
    }
}
