define(["knockout", "sample", "jqueryui"], function(ko, Sample) {
    return function() {
        this.title = "More Knockout";
        this.allPoints = [
            {
                title: "Built-in bindings",
                template: "bindings"
            },
            {
                title: "Custom bindings",
                template: "sample",
                data: new Sample("", "ko-more", [
                    new Sample.State("","custom-bindings", { forceLoad: true }),
                ])
            },
            {
                title: "Template engines",
                path: "ko-more/template-engines.html",
                template: "editor",
                type: "html"
            },
            {
                title: "Extensions",
                path: "ko-more/extensions.js",
                template: "editor",
                type: "js"
            },
            {
                title: "Binding providers",
                path: "ko-more/binding-providers.html",
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
        };
    };
});