define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 7: Computed Options";
        this.quote = "In the State of Tennessee, those wishing to sell a raptor must first obtain a permit.";

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