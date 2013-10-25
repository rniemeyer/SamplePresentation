define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("bindingProvider - preprocess", "pre-node", [
        new Sample.State("processing nodes", "node", { forceLoad: true }),
        new Sample.State("plugin - knockout.punches", "punches", { forceLoad: true })
    ]);

});