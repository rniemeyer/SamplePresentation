define(["knockout", "sample", "jqueryui"], function(ko, Sample) {
    return function() {
        this.title = "Code Smells";
        this.allPoints = [
            {
                title: "DOM manipulation in View Model",
                path: "smells/dom.js",
                template: "editor",
                type: "js"
            },
            {
                title: "Wire-up code",
                path: "smells/wire.js",
                template: "editor",
                type: "js"
            },
            {
                title: "Forcing updates",
                path: "smells/force.js",
                template: "editor",
                type: "js"
            },
            {
                title: "Calling ko.applyBindings many times",
                path: "smells/apply.js",
                template: "editor",
                type: "js"
            },
            {
                title: "Logic/functions in bindings",
                path: "smells/logic.html",
                template: "editor",
                type: "html"
            }
        ];

        this.points = ko.observableArray();

        this.currentPoint = ko.computed(function() {
            var points = this.points();
            return points.length && points[points.length - 1];
        }, this);

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

            return true;
        };
    };
});