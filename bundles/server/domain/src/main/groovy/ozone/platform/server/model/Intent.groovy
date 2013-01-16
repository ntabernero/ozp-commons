package ozone.platform.server.model

import static ozone.platform.server.model.ValidationHelpers.isNotBlank

class Intent extends Entity {

    String action
    String dataType
    boolean canSend
    boolean canReceive

    public Intent(String action, String dataType, boolean canSend, boolean canReceive) {
        setAction(action)
        setDataType(dataType)
        setSendReceivePair(canSend, canReceive)
    }

    public void setAction(String action) {
        assert isNotBlank(action), "Action is required"
        this.action = action
    }

    public void setDataType(String dataType) {
        assert isNotBlank(dataType), "DataType is required"
        this.dataType = dataType
    }

    public void setCanSend(boolean canSend) {
        setSendReceivePair(canSend, canReceive)
    }

    public void setCanReceive(boolean canReceive) {
        setSendReceivePair(canSend, canReceive)
    }

    private void setSendReceivePair(boolean canSend, boolean canReceive) {
        assert canSend || canReceive, "Widget must be able to send and/or receive the intent"
        this.canReceive = canReceive
        this.canSend = canSend
    }
}
