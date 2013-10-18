define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 8: Binding Providers";
        this.quote = "In the State of Tennessee, it is illegal to hunt animals from a plane.";

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