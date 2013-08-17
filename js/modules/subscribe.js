define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("5- subscriptions", "subscribe", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true }),
        new Sample.State("beforeChange","before"),
        new Sample.State("topic","topic", { forceLoad: true }),
        new Sample.State("ko.postbox","postbox", { forceLoad: true })
    ]);

});