define(["knockout"], function(ko) {
    return function() {
        this.title = "What are we talking about?";

        this.showLogos = ko.observable(false);

        this.allPoints = [
            { title: "Client-side JavaScript libraries"},
            { title: "\"Single-page applications\" (SPA)"},
            { title: "MVC/MVVM/MV*"},
            { title: "Separation of data / DOM"},
            { title: "Lots of libraries out there" }
        ];

        this.libraries = [
            { template: "marker", data: { x: 0.75, y: 1.25, rotate: -5, title: "Angular" } },
            { template: "marker", data: { x: 2.5, y: 2.5, rotate: 20, title: "Ember" } },
            { template: "marker", data: { x: 3.75, y: 2.5, rotate: 15, title: "Spine" } },
            { template: "marker", data: { x: 0.75, y: 2.5, rotate: -15, title: "Batman" } },
            { template: "marker", data: { x: 2, y: 1.25, rotate: 5, title: "Sammy" } },
            { template: "marker", data: { x: 3.5, y: 1.25, rotate: 15, title: "Agility" } },
            { template: "marker", data: { x: 0, y: 2, rotate: -5, title: "Meteor" } },
            { template: "marker", data: { x: 5, y: 2.5, rotate: 0, title: "Derby" } },
            { template: "marker", data: { x: 5.25, y: 1.75, rotate: 15, title: "CanJS" } },
            { template: "marker", data: { x: 4.5, y: 3, rotate: 5, title: "KendoUI" } },
            { template: "marker", data: { x: 4.75, y: 1.25, rotate: 5, title: "React" } },
            { template: "marker", data: { x: 1.5, y: 3, rotate: -5, title: "Waterslide" } },
            { template: "marker", data: { x: 0, y: 3, rotate: 20, title: "EmVeeSee" } },
            { template: "marker", data: { x: 2.75, y: 3.25, rotate: -5, title: "BaconBaconBacon" } }
        ];

        this.activeLibraries = ko.observableArray();

        this.points = ko.observableArray();

        this.currentPoint = ko.computed(function() {
            var points = this.points();

            if (points.length) {
                return points[points.length - 1];
            }
        }, this);

        this.showVideo = ko.observable();
        this.showX = ko.observable();

        this.points.subscribe(this.showX.bind(null, null));

        this.showExtra = function(point) {
            this.showVideo(point.title === "Separation of data / DOM");
            this.showX(point.title === "MVC/MVVM/MV*");
        }.bind(this);

        //add the top point to the list of displayed points
        this.next = function() {
            if (!this.showLogos()) {
                this.showLogos(true);
            }
            else if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
            else if (this.libraries.length) {
                this.activeLibraries.push(this.libraries.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.activeLibraries().length) {
                this.libraries.unshift(this.activeLibraries.pop());
            }
            else if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
            else {
                this.showLogos(false);
            }
        };
    };
});