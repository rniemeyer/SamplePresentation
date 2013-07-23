define(["knockout"], function(ko) {
    return function() {
        this.title = "Knockout.js";
        this.allPoints = [
            { title: "Created by Steve Sanderson in 2010"},
            { title: "Focuses on data binding"},
            { title: "Templating"},
            { title: "Observable structures"},
            { title: "Dependency tracking"}
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