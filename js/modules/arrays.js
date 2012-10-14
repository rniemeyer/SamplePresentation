define(["knockout", "sample"], function(ko, Sample) {
    window.Meeting = function(name, location) {
        this.name = ko.observable(name);
        this.location = ko.observable(location);

        this.formatted = ko.computed(function() {
            return this.name() + " (" + this.location() + ")";
        }, this);
    };

    return new Sample("Arrays", "arrays", [
        new Sample.State("Basic array", "basic-array"),
        new Sample.State("Using an observableArray", "observable-array"),
        new Sample.State("Adding items to an observableArray", "adding-item"),
        new Sample.State("Removing items", "removing-item"),
    ]);
});