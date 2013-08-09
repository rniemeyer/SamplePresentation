var CamperView = Backbone.View.extend({
    initialize: function() {

    }
});

var model = new Camper({ name: "Bob Smith", room: 515 });

var view = new CamperView({
    model: model,
    el: "#ko"
});