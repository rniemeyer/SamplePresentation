define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 1: Dynamic Templates";
        this.quote = "In the State of Tennessee, it is illegal to use a lasso to catch a fish.";

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