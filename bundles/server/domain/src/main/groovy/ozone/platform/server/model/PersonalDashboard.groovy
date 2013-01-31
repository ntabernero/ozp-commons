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

class PersonalDashboard extends Dashboard {

    boolean isDefault = false //Identifies last used dashboard, OWF starts on default dashboard if no dashboard id provided

    final Person person

    protected PersonalDashboard(String name, int position, Person person) {
        super(name, position)
        assert person, "Person is required"
        this.person = person
    }
}
