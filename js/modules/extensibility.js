define(["knockout"], function(ko) {
    var ViewModel = function() {
        var self = this;

        this.title = "Extensibility Points"

        this.allPoints = [
            "Custom Bindings",
            "Extending KO Base Types",
            "Template Engines",
            "Template Sources",
            "Binding Providers"
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

    return new ViewModel();
});