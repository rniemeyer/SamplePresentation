define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("dynamic bindings", "dynamic", [
        new Sample.State("create bindings on-the-fly","dynamic", { forceLoad: true }),
        new Sample.State("create bindings on-the-fly","dynamic-2", { forceLoad: true })
    ]);

});