define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("3- computed options", "three", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true })
    ]);

});