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

    window.CamperView = Backbone.View.extend({
        tagName: "li",
        render: function() {
            return this.$el.html(this.model.get("name") + " - " + this.model.get("room"));
        }
    });

    return  new Sample("Backbone Basics", "bb-basics", [
        new Sample.State("Before Backbone","start"),
        new Sample.State("Models","model"),
        new Sample.State("Views","view"),
        new Sample.State("Collections","collection")
    ]);

});