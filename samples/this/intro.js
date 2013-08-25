define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 2: Controlling \"this\"";
        this.quote = "In the State of Tennessee, it is illegal to own an albino deer.";

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