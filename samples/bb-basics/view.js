var View = Backbone.View.extend({
    events: {
        "keyup #nameEdit": function() {
            this.model.set("name", $("#nameEdit").val());
        }
    },
    initialize: function(data) {
        this.listenTo(this.model, "change:name", this.onNameUpdate, this);
        this.onNameUpdate();
    },
    onNameUpdate: function(model, newValue) {
        var value = newValue || this.model.get("name");
        this.$("#nameEdit").val(value);
        this.$("#name").text(value);
    }
});

var camper = new Camper({ name: "Bob Smith", room: 515 });
var view = new View({ el: "#content" , model: camper });