define(["knockout"], function(ko) {
    return function() {
        this.title = "More Backbone";
        this.allPoints = [
            { title: "Router and History"},
            { title: "RESTful syncing"},
            { title: "Underscore"},
            { title: "Very readable/digestible code"}
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