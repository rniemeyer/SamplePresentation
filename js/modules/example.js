define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("Together", "example", [
        new Sample.State("Sample code","code"),
        new Sample.State("Build on code (Alt+? in editor to pull code)","more"),
        new Sample.State("Force update", "force", { forceLoad: true }),
        new Sample.State("Build on update (Alt+? in editor to pull code)", "force-more"),
        new Sample.State("Knockback", "knockback", { loadAsSection: true, forceLoad: true })
    ]);

});