define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("10- code smells", "smells", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true, loadAsSection: true, hideTitle: true })
    ]);

});