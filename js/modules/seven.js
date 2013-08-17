define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("7- extensions", "seven", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true })
    ]);

});