define(["knockout"], function(ko) {
    return function() {
        var self = this;
        this.title = "Why focus on these two?";
        this.allPoints = [
            { template: "marker", data: { x: 1, y: 0, rotate: -5, title: "Lightweight" } },
            { template: "marker", data: { x: 4, y: 0, rotate: 5, title: "Few Dependencies" } },
            { template: "marker", data: { x: 3.5, y: 1.25, rotate: 15, title: "Focused / lean" } },
            { template: "marker", data: { x: 0, y: 1, rotate: -15, title: "Flexible / Build your own framework" } },
            { template: "marker", data: { x: 1.5, y: 1.75, rotate: 5, title: "Resources / Community Support" } }
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