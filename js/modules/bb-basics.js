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

    return  new Sample("Backbone Basics", "bb-basics", [
        new Sample.State("Before Backbone","start"),
        new Sample.State("Models","model"),
        new Sample.State("Views","view"),
        new Sample.State("Collections","collection"),
        new Sample.State("Router","router")
    ]);

});