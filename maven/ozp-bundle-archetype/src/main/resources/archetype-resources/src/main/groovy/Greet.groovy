package $package

class Greet {

    def name

    Greet(who) {
        name = who[0].toUpperCase() + who[1..-1]
    }

    def salute() { "Hello $name!" }
}