define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 6: Extensions";
        this.quote = "In the State of Tennessee, duelists are not allowed to hold public office.";

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