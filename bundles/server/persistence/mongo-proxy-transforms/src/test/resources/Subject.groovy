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

package org.ozoneplatform.commons.server.persistence.mongo.test

import org.ozoneplatform.commons.server.persistence.mongo.UnitOfWorkAware

@UnitOfWorkAware(includeMethods = ['^add.*'])
class Subject {

    static int count = 0

    String name

    int age

    final boolean rocks = true

    private final List<Band> bands = [new Band(bandName: 'The Smiths')]
    Band addBand(String band) {
        def newBand = new Band(bandName: band)
        bands.add(newBand)
        newBand
    }

    private final List<String> fans = []
    void addFan(String fanName) {
        fans.add(fanName)
    }

    public void setAge(int age) {
        this.age = age
    }

    class Band {
        String bandName
    }
}
