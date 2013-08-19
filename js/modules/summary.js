define(["knockout"], function(ko) {
    return function() {
        this.title = "Summary";
        this.allPoints = [
            { title: "Dynamic Templating"},
            { title: "Controlling \"this\""},
            { title: "Computed options"},
            { title: "Throttling"},
            { title: "Subscriptions"},
            { title: "Custom Bindings"},
            { title: "Extensions"},
            { title: "Binding Providers"},
            { title: "Debugging Tips"},
            { title: "Code Smells"}
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