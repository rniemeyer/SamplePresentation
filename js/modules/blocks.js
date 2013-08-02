define(["knockout"], function(ko) {
    return function() {
        this.title = "Building Blocks";
        this.koPointsAll = [
            {
                title: "Observables",
                name: "ko.observable",
                description: "get/set values while notifying subscribers"
            },
            {
                title: "Computed Observables",
                name: "ko.computed",
                description: "calculated values that are automatically updated"
            },
            {
                title: "Observable Arrays",
                name: "ko.observableArray",
                description: "arrays that notify subscribers on changes"

            },
            {
                title: "Bindings",
                name: "ko.bindingHandlers",
                description: "declarative 1 or 2 way bindings in markup"
            }
        ];

        this.bbPointsAll = [
            {
                title: "Model",
                name: "Backbone.Model",
                description: "store data and manage changes, validation, etc."
            },
            {
                title: "Collections",
                name: "Backbone.Collection",
                description: "ordered sets of models"
            },
            {
                title: "Views",
                name: "Backbone.Views",
                description: "connect/render UI against model (typically)"
            },
            {
                title: "Router",
                name: "Backbone.Router",
                description: "client-side routing (URL management)"
            }
        ];

        this.koPoints = ko.observableArray();
        this.bbPoints = ko.observableArray();

        this.currentPoint = ko.computed(function() {
            var koPoints = this.koPoints(),
                bbPoints = this.bbPoints(),
                result = "";

            if (koPoints.length) {
                result = koPoints[koPoints.length - 1];
            }
            else if (bbPoints.length) {
                result = bbPoints[bbPoints.length - 1];
            }

            return result;
        }, this);

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