define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("7- computed options", "computed", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true }),
        new Sample.State("deferEvaluation","defer"),
        new Sample.State("disposeWhenNodeIsRemoved","disposeWhenNodeIsRemoved"),
        new Sample.State("dispose","dispose")
    ]);

});