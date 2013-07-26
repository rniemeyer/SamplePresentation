define(["knockout"], function(ko) {
    return function() {
        this.title = "Building Blocks";
        this.koPointsAll = [
            { title: "Observables"},
            { title: "Computed Observables"},
            { title: "Observable Arrays"},
            { title: "Bindings"}
        ];

        this.bbPointsAll = [
            { title: "Model"},
            { title: "Collections"},
            { title: "Views"},
            { title: "Router"}
        ];

        this.koPoints = ko.observableArray();
        this.bbPoints = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.bbPointsAll.length) {
                this.bbPoints.push(this.bbPointsAll.shift());
            }
            else if (this.koPointsAll.length) {
                this.koPoints.push(this.koPointsAll.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.koPoints().length) {
                this.koPointsAll.unshift(this.koPoints.pop());
            }
            else if (this.bbPoints().length) {
                this.bbPointsAll.unshift(this.bbPoints.pop());
            }
        };
    };
});