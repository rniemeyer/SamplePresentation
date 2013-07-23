define(["knockout"], function(ko) {
    return function() {
        this.title = "Why focus on these libraries?";
        this.allPoints = [
            { title: "Point one"},
            { title: "Point two"},
            { title: "Point three"},
            { title: "Point four"},
            { title: "Alt+Right will move to next section"}
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