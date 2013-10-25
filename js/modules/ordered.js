define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("Ordered Bindings", "ordered", [
        new Sample.State("Knockout 2.3","ko2", { forceLoad: true }),
        new Sample.State("Knockout 3.0","ko3", { forceLoad: true }),
        new Sample.State("Details", "details", { loadAsSection: true, forceLoad: true, showTitle: false })
    ]);

});