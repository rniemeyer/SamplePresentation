var View = Backbone.View.extend({

});

var camper = new Camper({ name: "Bob Smith", room: 515 });
var view = new View({ el: "#bb-content" , model: camper });