define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("8- binding providers", "provider", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start", "okay", { forceLoad: true, hideJs: true, hideResult: true }),
        new Sample.State("still okay", "messy", { forceLoad: true, hideJs: true, hideResult: true }),
        new Sample.State("getting messy", "messier", { forceLoad: true, hideJs: true, hideResult: true }),
        new Sample.State("MY EYES!!!", "messiest", { forceLoad: true, hideJs: true, hideResult: true }),
        new Sample.State("sample provider","provider", { forceLoad: true, hideHtml: true, hideResult: true }),
        new Sample.State("provider","start", { forceLoad: true }),
        new Sample.State("KO 3.0","provider-3", { forceLoad: true, hideHtml: true, hideResult: true })
    ]);

});