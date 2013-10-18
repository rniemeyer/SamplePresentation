define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 6: Extensions";
        this.quote = "In the State of Tennessee, duelists are not allowed to hold public office.";

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