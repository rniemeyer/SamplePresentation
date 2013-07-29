define(["knockout"], function(ko) {
    return function() {
        this.title = "Backbone vs. Knockout";

        this.koPoints = {
            pros: [
                "Separation of data and markup",
                "Narrow focus - data binding",
                "Easy to get started with",
                "Dependency tracking - automatic updates",
                "built-in bindings + custom bindings"
            ],
            activePros: ko.observableArray(),
            cons: [
                "Narrow focus - need other libraries",
                "Source is harder to debug - more magic",
                "Does not dictate/provide structure"
            ],
            activeCons: ko.observableArray()
        };

        this.bbPoints = {
            pros: [
                "Separation of data and markup",
                "Provides building blocks and structure",
                "Build your own framework",
                "Source is very approachable",
                "Lots of community plugins"
            ],
            activePros: ko.observableArray(),
            cons: [
                "Low-level, more boilerplate",
                "More manual, less \"magic\"",
                "Harder initial learning curve"
            ],
            activeCons: ko.observableArray()
        };

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.koPoints.pros.length) {
                this.koPoints.activePros.push(this.koPoints.pros.shift());
                return;
            }

            if (this.koPoints.cons.length) {
                this.koPoints.activeCons.push(this.koPoints.cons.shift());
                return;
            }

            if (this.bbPoints.pros.length) {
                this.bbPoints.activePros.push(this.bbPoints.pros.shift());
                return;
            }

            if (this.bbPoints.cons.length) {
                this.bbPoints.activeCons.push(this.bbPoints.cons.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.bbPoints.activeCons().length) {
                this.bbPoints.cons.unshift(this.bbPoints.activeCons.pop());
                return;
            }

            if (this.bbPoints.activePros().length) {
                this.bbPoints.pros.unshift(this.bbPoints.activePros.pop());
                return;
            }

            if (this.koPoints.activeCons().length) {
                this.koPoints.cons.unshift(this.koPoints.activeCons.pop());
                return;
            }

            if (this.koPoints.activePros().length) {
                this.koPoints.pros.unshift(this.koPoints.activePros.pop());
            }
        };
    };
});