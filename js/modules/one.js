define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("1- Templating", "one", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true })
    ]);

});