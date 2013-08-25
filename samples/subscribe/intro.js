define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 4: Subscriptions/Events";
        this.quote = "In the State of Tennessee, using dynamite to catch fish is illegal, and each fish caught is a separate crime.";

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