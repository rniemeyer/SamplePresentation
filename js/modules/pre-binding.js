define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("custom binding - preprocess", "pre-binding", [
        new Sample.State("Knockout 2.3","ko2", { forceLoad: true }),
        new Sample.State("Knockout 3.0","ko3", { forceLoad: true }),
        new Sample.State("Knockout 3.0","ko3-2", { forceLoad: true })
    ]);

});