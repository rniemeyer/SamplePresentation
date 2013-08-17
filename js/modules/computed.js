define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("3- computed options", "computed", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true }),
        new Sample.State("deferEvaluation","defer"),
        new Sample.State("disposeWhenNodeIsRemove","disposeWhenNodeIsRemove"),
        new Sample.State("dispose","dispose")
    ]);

});