define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("2- \"this\"", "this", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start", "start", { forceLoad: true }),
        new Sample.State("bind handler", "bind-1"),
        new Sample.State("bind in markup", "bind-2"),
        new Sample.State("closure", "bind-3"),
        new Sample.State("closure", "bind-3"),
        new Sample.State("delegated", "bind-4"),
        new Sample.State("plugin (knockout-delegatedEvents)", "bind-5"),
        new Sample.State("revealing module", "revealing", { forceLoad: true })
    ]);

});