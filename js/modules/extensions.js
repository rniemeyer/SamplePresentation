define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("6- extensions", "extensions", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("Basic validation","start", { forceLoad: true }),
        new Sample.State("Basic validation","basic-validation", { forceLoad: true }),
        new Sample.State("Types", "types", { loadAsSection: true, forceLoad: true }),
        new Sample.State("Extending observables", "extension-start", { forceLoad: true }),
        new Sample.State("Extending observables", "extension"),
        new Sample.State("Add a validation message", "message", { forceLoad: true }),
        new Sample.State("Mapping array data", "mapping", { forceLoad: true }),
        new Sample.State("Setting focus to an element", "focus-start", { forceLoad: true }),
        new Sample.State("Setting focus to an element", "focus", { forceLoad: true })
    ]);

});