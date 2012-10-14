define(["knockout", "sample"], function(ko) {
    return function() {
        var self = this;
        this.title = "What is Knockout.js?";

        this.json = ko.observable(ko.toJSON({

        }, null, 2));

        this.allPoints = [
            { template: "marker", data: { x: 1, y: 0, rotate: -5, title: "JavaScript library" } },
            { template: "marker", data: { x: 4, y: .25, rotate: 5, title: "MIT license" } },
            { template: "marker", data: { x: 2.5, y: .75, rotate: 15, title: "Active project/community" } },
            { template: "marker", data: { x: 0, y: .75, rotate: -15, title: "Data binding" } },
            { template: "marker", data: { x: 1.75, y: 1, rotate: 5, title: "MVVM" } },
            { template: "model" },
            { template: "view" },
            { template: "viewmodel" },
            { template: "points", data: {
                allPoints: ko.observableArray([
                    "ViewModel",
                    "View",
                    "Model",
                    "MVVM"
                ]),
                activePoints: ko.observableArray([]),
                next: function() {
                    if (this.allPoints().length) {
                        this.activePoints.push(this.allPoints.pop());
                    }
                },
                previous: function() {
                    if (this.activePoints().length) {
                        this.allPoints.push(this.activePoints.pop());
                    }
                }
            }
            }
        ];

        this.allPoints[8].data.activePoints.json = ko.computed(function() {
            this.activePoints.json.update = true;
            return ko.toJSON(this, null, 2);
        }, this.allPoints[8].data, { deferEvaluation: true });

        this.points = ko.observableArray([]);

        this.hideMarkers = ko.computed(function() {
            return self.points().length > 5;
        });

        this.hideBoxes = ko.computed(function() {
            var length = self.points().length;
            return length < 6 || length > 8;
        });

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