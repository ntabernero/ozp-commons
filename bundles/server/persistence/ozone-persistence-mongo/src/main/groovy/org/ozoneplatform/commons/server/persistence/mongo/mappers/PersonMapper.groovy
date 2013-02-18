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

package org.ozoneplatform.commons.server.persistence.mongo.mappers

import org.ozoneplatform.commons.server.domain.model.Person
import org.ozoneplatform.commons.server.persistence.mongo.proxy.PersonProxy

class PersonMapper {

    def toDocument(Person person) {
        [
                type: 'person',
                username: person.username,
                fullname: person.fullName,
                email: person.email,
                lastLogin: toBsonDate(person.lastLogin),
                prevLogin: toBsonDate(person.prevLogin)
        ]
    }

    def fromDocument(def document) {
        new PersonProxy(
                username: document.username,
                fullName: document.fullName,
                email:  document.email,
                lastLogin: fromBsonDate(document.lastLogin),
                prevLogin: fromBsonDate(document.prevLogin))
    }

    def toBsonDate(Calendar cal) {
        if (cal)
            cal.getTime()
    }

    def fromBsonDate(def date) {
        if (date) {
            Calendar cal = Calendar.instance
            cal.setTime(date)
            return cal
        }
    }
}
