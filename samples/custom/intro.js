define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 5: Custom Bindings";
        this.quote = "In the State of Tennessee, it is illegal to fire a gun at any wild game other than whales from a moving car.";

        this.showTitle = ko.observable(true);

        this.next = function() {
            if (!this.showTitle()) {
                this.showTitle(true);
                return true;
            }
        };

        //step back
        this.previous = function() {
            this.showTitle(false);
            return true;
        };
    };
});