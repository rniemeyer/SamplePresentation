define(["knockout"], function(ko) {
    return function() {
        this.title = "What are we talking about?";

        this.allPoints = [
            { title: "Knockout.js"},
            { title: "v2.3.0 and things coming in KO 3.0"},
            { title: "10 rounds of tips, tricks, patterns"},
            { title: "Byte-sized code samples"},
            { title: "Strange Tennessee Laws"}
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
            if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
        };
    };
});