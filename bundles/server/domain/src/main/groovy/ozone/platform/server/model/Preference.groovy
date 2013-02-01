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

import static org.ozoneplatform.commons.server.domain.validation.ValidationHelpers.isNotBlank

class Preference {

    final String namespace
    final String name
    final String value

    protected Preference(String namespace, String name, String value) {
        assert isNotBlank(namespace), "Namespace is required"
        assert isNotBlank(name), "Name is required"
        assert isNotBlank(value), "Value is required"

        this.namespace = namespace
        this.name = name
        this.value = value
    }

    boolean equals(o) {
        if (this.is(o)) return true
        if (getClass() != o.class) return false

        Preference that = (Preference) o
        return name == that.name && namespace == that.namespace
    }

    int hashCode() {
        int result
        result = name.hashCode()
        result = 31 * result + namespace.hashCode()
        return result
    }
}
