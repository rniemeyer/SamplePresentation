define(["knockout", "sample"], function(ko, Sample) {

    //add this sample constructor to window, so it is accessible in observableArray sample
    window.Camper = function(data) {
        this.name = ko.observable(data.name);
        this.room = ko.observable(data.room);
        this.formatted = ko.computed(this.getFormatted, this);
    };

    window.Camper.prototype.getFormatted = function() {
        return this.name() + " (" + this.room() + ")";
    };

    return  new Sample("Knockout Basics", "ko-basics", [
        new Sample.State("Before Knockout","start"),
        new Sample.State("Before Knockout","no-ko", { forceLoad: true }),
        new Sample.State("Basic Bindings", "basic"),
        new Sample.State("Observables", "observables"),
        new Sample.State("Computeds", "computed"),
        new Sample.State("Better ViewModel", "constructor"),
        new Sample.State("ObservableArrays", "arrays")
    ]);

});