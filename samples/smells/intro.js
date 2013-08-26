define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 10: Code Smells";
        this.quote = "In the State of Tennesee, importing skunks is a crime.";

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