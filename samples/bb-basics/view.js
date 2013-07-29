var camper = new Camper({ name: "Bob Smith", room: 515 });

var View = Backbone.View.extend({
    el: "#content",
    events: {
        "keyup #nameEdit": function() {
            this.model.set("name", $("#nameEdit").val());
        }
    },
    initialize: function(data) {
        this.model = new Camper({ name: "Bob", room: 100 });
        this.listenTo(this.model, "change:name", this.onNameUpdate, this);
        this.onNameUpdate();
    },
    onNameUpdate: function(model, newValue) {
        var value = newValue || this.model.get("name");
        this.$("#nameEdit").val(value);
        this.$("#name").text(value);
    }
});

var view = new View();
