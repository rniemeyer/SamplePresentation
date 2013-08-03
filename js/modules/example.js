define(["knockout", "sample"], function(ko, Sample) {
    window.Camper = Backbone.Model.extend({
        defaults: {
            name: "no name",
            room: 0
        },
        initialize: function(data) {
            console.log(arguments);
        }
    });

    return  new Sample("Together", "example", [
        new Sample.State("Sync to Backbone","bb-sync"),
        new Sample.State("Sync to KO","ko-sync"),
        new Sample.State("View with a ViewModel", "viewModel"),
        new Sample.State("Knockback", "knockback", { loadAsSection: true, forceLoad: true })
    ]);

});