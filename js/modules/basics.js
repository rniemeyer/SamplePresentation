define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Basics", "basics", [
        new Sample.State("No Knockout","no-knockout"),
        new Sample.State("No Knockout","no-knockout2", { forceLoad: true }),
        new Sample.State("Adding in some basic data binding", "basic-binding"),
        new Sample.State("Adding observables", "adding-observables"),
        new Sample.State("Adding a computed observable", "adding-computed"),
        new Sample.State("Creating a view model", "better")
    ]);

});