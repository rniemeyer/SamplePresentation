define(["knockout"], function(ko) {
    return function() {
        this.title = "What are we talking about?";

        this.showLogos = ko.observable(false);

        this.allPoints = [
            { title: "Client-side JavaScript libraries"},
            { title: "\"Single-page applications\" (SPA)"},
            { title: "MVC/MVVM/MV*"},
            { title: "Separation of data / DOM"},
            { title: "Lots of libraries out there" }
        ];

        this.points = ko.observableArray();

        this.currentPoint = ko.computed(function() {
            var points = this.points();

            if (points.length) {
                return points[points.length - 1];
            }
        }, this);

        //add the top point to the list of displayed points
        this.next = function() {
            if (!this.showLogos()) {
                this.showLogos(true);
            }
            else if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
            else {
                this.showLogos(false);
            }
        };
    };
});