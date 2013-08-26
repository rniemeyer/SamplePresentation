define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("1- Templating", "templating", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start", "start", { forceLoad: true }),
        new Sample.State("dynamic", "dynamic"),
        new Sample.State("observable", "observable", { forceLoad: true })
    ]);

});