define(["knockout"], function(ko) {
    return function() {
        this.title = "Other";

        this.allPoints = [
            { title: "binding to detached nodes"},
            { title: "access data before it was unwrapped through $rawData"},
            { title: "observable view models"},
            { title: "options binding generates change event"},
            { title: "miscellaneous peformance enhancements"},
            { title: "build uses Grunt.js (thanks to Larry Gordon)"},
            { title: "Checkout Michael Best's", link: "knockout-punches", href: "http://mbest.github.io/knockout.punches/" }
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