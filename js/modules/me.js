define(["knockout"], function(ko) {
    return function() {
        this.title = "About Me";
        this.allPoints = [
            "appendTo",
            "verona",
            "family",
            "desk"
        ];
        this.points = ko.observableArray([]);

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
        };

        //initialize the first point
        //this.next();

        //step back
        this.previous = function() {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
        };

    };
});