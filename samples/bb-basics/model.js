var Camper = Backbone.Model.extend({
    defaults: {
        name: "no name",
        room: 0
    },
    initialize: function(data) {
        console.log(arguments);
    }
});

var camper = new Camper({
    name: "Bob Smith",
    room: 515
});

