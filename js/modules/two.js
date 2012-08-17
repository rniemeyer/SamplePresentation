define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("Lazy Loaded Sample", "two", [
        new Sample.State("Sample code","code"),
        new Sample.State("Build on code (Alt+? in editor to pull code)","more"),
        new Sample.State("Force update", "force", { forceLoad: true }),
        new Sample.State("Build on update (Alt+? in editor to pull code)", "force-more")
    ]);  //this sample will not load the code immediately, unless told to by the individual state.  Code can be pulled in by Alt+Q

});