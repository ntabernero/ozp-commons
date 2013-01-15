package ozone.platform.server.model

class ValidationHelpers {

    static boolean isNotBlank(String s) {
        return s && !s.isAllWhitespace()
    }
}
