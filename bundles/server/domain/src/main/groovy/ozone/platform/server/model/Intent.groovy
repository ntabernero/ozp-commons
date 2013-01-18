package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Intent extends Entity {

    String action
    String dataType

    Intent(String action, String dataType) {
        setAction(action)
        setDataType(dataType)
    }

    void setAction(String action) {
        assert isNotBlank(action), "Action is required"
        this.action = action
    }

    void setDataType(String dataType) {
        assert isNotBlank(dataType), "DataType is required"
        this.dataType = dataType
    }
}
