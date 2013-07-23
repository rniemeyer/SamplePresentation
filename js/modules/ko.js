define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Code Sample One", "one", [
        new Sample.State("Some code","code"),
        new Sample.State("Hide output","no-output", { hideResult: true }),
        new Sample.State("Hide output and HTML", "just-js", { hideResult: true, hideHtml: true }),
        new Sample.State("Load some JS/HTML not as code sample", "not-sample", { loadAsSection: true }),
        new Sample.State("More code", "more"),
        new Sample.State("More code", "more2")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});