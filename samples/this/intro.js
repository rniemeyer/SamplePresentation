define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 2: Controlling \"this\"";
        this.quote = "In the State of Tennessee, it is illegal to own an albino deer.";

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