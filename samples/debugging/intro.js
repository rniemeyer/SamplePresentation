define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 9: Debugging Tips";
        this.quote = "In the State of Tennessee, it is against the law to drive a car while sleeping.";

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