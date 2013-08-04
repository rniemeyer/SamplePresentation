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
        new Sample.State("View with a ViewModel", "viewModel"),
        new Sample.State("Knockback", "knockback", { loadAsSection: true, forceLoad: true })
    ]);

});