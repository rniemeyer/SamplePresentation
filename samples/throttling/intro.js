define(["knockout"], function(ko) {
    return function() {
        this.title = "Round 3: Throttling";
        this.quote = "In the State of Tennesee, snake-handling that endangers one's life is a crime.";

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