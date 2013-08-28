define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 10: Code Smells";
        this.quote = "In the State of Tennesee, importing skunks is a crime.";

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