define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 5: Custom Bindings";
        this.quote = "In the State of Tennessee, it is illegal to fire a gun at any wild game other than whales from a moving car.";

        this.showQuote = ko.observable(false);

        this.next = function() {
            if (!this.showQuote()) {
                this.showQuote(true);
                return true;
            }
        };

        //step back
        this.previous = function() {
            this.showQuote(false);
            return true;
        };
    };
});