define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("checkedValue", "checkedValue", [
        new Sample.State("Knockout 2.3.0", "ko2", { forceLoad: true }),
        new Sample.State("Knockout 3.0", "ko3", { forceLoad: true })
    ]);

});