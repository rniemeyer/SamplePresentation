define(["knockout"], function(ko) {
    return function() {
        this.title = "Summary";
        this.allPoints = [
            { title: "Knockout focuses on binding, dependency chains, and templating"},
            { title: "Backbone provides low-level building blocks and structure"},
            { title: "KO and Backbone not strict alternatives"},
            { title: "Can be used together"},
            { title: "Choose the right tool for the job"}
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