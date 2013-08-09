var View = Backbone.View.extend({
    events: {
        "keyup .nameEdit": function(e) {
            this.model.set("name", e.target.value);
        }
    },
    initialize: function(data) {
        this.listenTo(this.model, "change:name", this.onNameUpdate, this);
        this.onNameUpdate(this.model, this.model.get("name"));
    },
    onNameUpdate: function(model, newValue) {
        this.$(".nameEdit").val(newValue);
        this.$(".name").text(newValue);
    }
});

var camper = new Camper({ name: "Bob Smith", room: 515 });
var view = new View({ el: "#bb-content" , model: camper });