define(["knockout"], function(ko) {
    return function() {
        this.title = "Built-in Bindings with order";

        this.allPoints = [
            { binding: "checked", after: ["value", "attr"] },
            { binding: "value", after: ["options", "foreach"] },
            { binding: "selectedOptions", after: ["options", "foreach"] },
            { message: "custom bindings can participate too!", path: "ordered/custom.js", type: "js" }
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