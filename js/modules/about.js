define(["knockout"], function(ko) {
    return function() {
        this.title = "Tale of the tape";
        this.koPointsAll = [
            { title: "Created by Steve Sanderson in 2010"},
            { title: "Focuses on data binding"},
            { title: "Templating"},
            { title: "Observable structures"},
            { title: "Dependency tracking"}
        ];

        this.bbPointsAll = [
            { title: "Created by Jeremy Ashkenas and Document Cloud"},
            { title: "Building blocks to structure a client-side application"},
            { title: "Minimalistic, low-level"}
        ];

        this.koPoints = ko.observableArray();
        this.bbPoints = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.koPointsAll.length) {
                this.koPoints.push(this.koPointsAll.shift());
            }
            else if (this.bbPointsAll.length) {
                this.bbPoints.push(this.bbPointsAll.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.bbPoints().length) {
                this.bbPointsAll.unshift(this.bbPoints.pop());
            }
            else if (this.koPoints().length) {
                this.koPointsAll.unshift(this.koPoints.pop());
            }
        };
    };
});