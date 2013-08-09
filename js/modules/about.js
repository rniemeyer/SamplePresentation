define(["knockout"], function(ko) {
    return function() {
        this.title = "Tale of the tape";
        this.koPointsAll = [
            { title: "Created by Steve Sanderson"},
            { title: "Released in mid 2010"},
            { title: "Open-source - MIT license" },
            { title: "Currently at version 2.3.0"},
            { title: "15kb min+gz. No strict dependencies."},
            { title: "Focuses on data binding between view and view model"}
        ];

        this.bbPointsAll = [
            { title: "Created by Jeremy Ashkenas (DocumentCloud)"},
            { title: "Released in late 2010"},
            { title: "Open-source - MIT license" },
            { title: "Currently at version 1.0.0"},
            { title: "6.3kb min+gz. Underscore only strict dependency."},
            { title: "Provides structure and building blocks"}
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