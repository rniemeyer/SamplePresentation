//this is an example of putting a non-sample "section" in the middle of a group of samples
define(["knockout"], function(ko) {
    return function() {
        this.title = "These are some points";
        this.allPoints = [
            { title: "Keep hitting Alt+Down"},
            { title: "The navigation will check if..."},
            { title: "...there is something to do in..."},
            { title: "...the most specific model first..."},
            { title: "...before moving on"}
        ];

        this.points = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
                return true;  //let overall navigation know that we did something
            }

            return false;  //we didn't do anything, overall navigation can continue
        };

        //step back
        this.previous = function() {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
                return true;   //let overall navigation know that we did something
            }

            return false; //we didn't do anything, overall navigation can continue
        };

        //initialize
        this.next();
    };
});