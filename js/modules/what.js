define(["knockout"], function(ko) {
    return function() {
        this.title = "What are we talking about?";
        this.allPoints = [
            { title: "Client-side JavaScript libraries"},
            { title: "\"Single-page applications\" (SPA)"},
            { title: "MVC/MVVM/MV*"},
            { title: "Separation of data from DOM elements"},
            { title: "Communicate with backend via JSON"}
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