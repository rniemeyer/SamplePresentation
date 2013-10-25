define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("3- throttling", "throttling", [
        new Sample.State("searching","searching", { forceLoad: true }),
        new Sample.State("filtering","start", { forceLoad: true }),
        new Sample.State("filtering","counter", { forceLoad: true }),
        new Sample.State("filtering","end", { forceLoad: true })
    ]);

});