define(["knockout", "sample"], function(ko, Sample) {

    window.Camper = Backbone.Model.extend({
        defaults: {
            name: "no name",
            room: 0
        }
    });

    window.CamperView = Backbone.View.extend({
        tagName: "li",
        render: function() {
            return this.$el.html(this.model.get("name") + " - " + this.model.get("room"));
        }
    });

    return  new Sample("Backbone Basics", "bb-basics", [
        new Sample.State("Before Backbone","start"),
        new Sample.State("Models","model", { forceLoad: true }),
        new Sample.State("Models","model-2"),
        new Sample.State("Views","view", { forceLoad: true }),
        new Sample.State("Views - listen to model","view-2"),
        new Sample.State("Views - listen to events","view-3"),
        new Sample.State("Collections","collection")
    ]);

});