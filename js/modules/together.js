define(["knockout"], function(ko) {
    return function() {
        this.title = "Backbone and Knockout Together";
        this.allPoints = [
            { title: "Backbone provides good structure"},
            { title: "Backbone provides syncing with the server"},
            { title: "Knockout shines in two-way binding"},
            { title: "Backbone provides router/history support"}
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