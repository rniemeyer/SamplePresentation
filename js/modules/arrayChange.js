define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("arrayChange", "arrayChange", [
        new Sample.State("notifications", "array", { forceLoad: true })
    ]);

});