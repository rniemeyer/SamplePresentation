define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("Knockout Basics", "knockout-basics", [
        new Sample.State("Sample code","code"),
        new Sample.State("Build on code (Alt+? in editor to pull code)","more"),
        new Sample.State("Force update", "force", { forceLoad: true }),
        new Sample.State("Build on update (Alt+? in editor to pull code)", "force-more")
    ]);

});