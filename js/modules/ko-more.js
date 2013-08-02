define(["knockout"], function(ko) {
    return function() {
        this.title = "More Knockout";
        this.allPoints = [
            {
                title: "Custom bindings",
                path: "ko-more/custom-bindings.js",
                type: "js"
            },
            {
                title: "Template engines",
                path: "ko-more/template-engines.html",
                type: "html"
            },
            {
                title: "Extensions",
                path: "ko-more/extensions.js",
                type: "js"
            },
            {
                title: "Binding providers",
                path: "ko-more/binding-providers.html",
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
        };
    };
});