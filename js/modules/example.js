define(["knockout", "sample"], function(ko, Sample) {
    window.Camper = Backbone.Model.extend({
        defaults: {
            name: "no name",
            room: 0
        }
    });

    return  new Sample("Together", "example", [
        new Sample.State("Sync to Backbone","bb-sync", { hideHtml: true }),
        new Sample.State("Sync to KO","ko-sync", { hideHtml: true }),
        new Sample.State("View with a ViewModel", "viewModel", { forceLoad: true }),
        new Sample.State("View with a ViewModel", "viewModel-2", { forceLoad: true }),
        new Sample.State("View with a ViewModel", "viewModel-3", { forceLoad: true }),
        new Sample.State("View with a ViewModel", "viewModel-4", { forceLoad: true }),
        new Sample.State("View with a ViewModel", "viewModel-5", { forceLoad: true }),
        new Sample.State("Knockback", "knockback", { loadAsSection: true, forceLoad: true })
    ]);

});