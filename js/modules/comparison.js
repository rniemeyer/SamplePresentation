define(["knockout"], function(ko) {
    return function() {
        this.title = "Backbone vs. Knockout";
        this.allPoints = [
            { title: "Both allow separation of data and markup"},
            { title: "Knockout has a narrower focus (data binding)"},
            { title: "Backbone has well-rounded basic building blocks"},
            { title: "Backbone has less \"magic\", more manual"},
            { title: "Knockout requires other libraries for routing, etc." }
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