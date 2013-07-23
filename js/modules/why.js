define(["knockout"], function(ko) {
    return function() {
        this.title = "Why focus on these libraries?";
        this.allPoints = [
            { title: "Lightweight"},
            { title: "Few dependencies"},
            { title: "Not full frameworks"},
            { title: "Build it your way"}
        ];

        this.points = ko.observableArray();

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