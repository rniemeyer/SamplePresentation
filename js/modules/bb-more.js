define(["knockout"], function(ko) {
    return function() {
        this.title = "More Backbone";
        this.allPoints = [
            {
                title: "Router and History",
                path: "bb-more/router-history.js",
                type: "js"
            },
            {
                title: "RESTful syncing",
                path: "bb-more/sync.js",
                type: "js"
            },
            {
                title: "Underscore",
                path: "bb-more/underscore-sample.js",
                type: "js"
            },
            {
                title: "Very readable/digestible code"
            }
        ];

        this.points = ko.observableArray();

        this.currentPoint = ko.computed(function() {
            var points = this.points();
            return points.length && points[points.length - 1];
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