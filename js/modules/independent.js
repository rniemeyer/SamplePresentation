define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("Independent Bindings", "independent", [
        new Sample.State("Knockout 2.3","ko2", { forceLoad: true }),
        new Sample.State("Knockout 3.0","ko3", { forceLoad: true })
    ]);

});