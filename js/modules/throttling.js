define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("3- throttling", "throttling", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("before","start", { forceLoad: true }),
        new Sample.State("after","end", { forceLoad: true })
    ]);

});