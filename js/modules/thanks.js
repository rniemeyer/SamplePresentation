define(function() {
    var ViewModel = function() {
        var self = this;

        this.title = "Thanks!";
        this.speaker = "Ryan Niemeyer";
        this.twitter = "@RPNiemeyer";

        this.subtitle = "Resources";

        this.points= [
            { name: "Main Site - ", url: "http://knockoutjs.com "},
            { name: "Tutorials - ", url: "http://learn.knockoutjs.com "},
            { name: "My Blog - ", url: "http://knockmeout.net"}
        ];

        this.showThanks = ko.observable(false);

        this.next = function() {
            var current = this.showThanks();
            if (!current) {
                this.showThanks(true);
                return true;
            }

            return false;
        };

        this.previous = function() {
            var current = this.showThanks();
            if (current) {
                this.showThanks(false);
                return true;
            }

            return false;
        }

    };

    return new ViewModel();
});