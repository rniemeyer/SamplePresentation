define(["knockout"], function(ko) {
    return function() {
        this.title = "Knockback.js";
        this.allPoints = [
            { template: "site", data: {
                url: "http://kmalakoff.github.io/knockback/",
                localUrl: "http://knockback.dev/"
            } }
        ];

        this.points = ko.observableArray([]);

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