define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("5- custom bindings", "custom", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("How they work","anatomy", { hideHtml: true, hideResult: true, forceLoad: true }),
        new Sample.State("Wrapper","wrapper-start", { forceLoad: true }),
        new Sample.State("Wrapper","wrapper-bad", { forceLoad: true }),
        new Sample.State("Wrapper","wrapper-mid", { forceLoad: true }),
        new Sample.State("Wrapper","wrapper-end"),
        new Sample.State("Tooltip", "tooltip-start", { forceLoad: true }),
        new Sample.State("Tooltip", "tooltip-basic-start", { forceLoad: true }),
        new Sample.State("Tooltip", "tooltip-basic"),
        new Sample.State("Tooltip w/options", "tooltip-global-options", { forceLoad: true }),
        new Sample.State("Tooltip w/options", "tooltip-all-options", { forceLoad: true }),
        new Sample.State("Tooltip cleanup", "tooltip-cleanup", { forceLoad: true }),
        new Sample.State("Editor", "editor", { forceLoad: true }),
        new Sample.State("Modal", "modal-start", { forceLoad: true }),
        new Sample.State("Modal", "modal", { forceLoad: true }),
        new Sample.State("Modal", "modal-end")
    ]);

});