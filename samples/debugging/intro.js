define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 9: Debugging Tips";
        this.quote = "In the State of Tennessee, it is against the law to drive a car while sleeping.";

        this.showTitle = ko.observable(false);

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