define(["knockout"], function(ko) {
    return function() {
        this.title = "Backbone.js";
        this.allPoints = [
            { title: "Created by Jeremy Ashkenas and Document Cloud"},
            { title: "Building blocks to structure a client-side application"},
            { title: "Model"},
            { title: "Collections"},
            { title: "Views"},
            { title: "Router"}
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