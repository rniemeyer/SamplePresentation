define(["knockout"], function(ko) {
    return function() {
        this.title = "More Knockout";
        this.allPoints = [
            { title: "Custom bindings"},
            { title: "Template engines"},
            { title: "Extensions"},
            { title: "Binding providers"}
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