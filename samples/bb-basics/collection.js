var Campers = Backbone.Collection.extend({
    model: Camper
});

var CampersView = Backbone.View.extend({
    initialize : function() {
        this.camperViews = this.collection.map(function(camper) {
            return new CamperView({ model: camper });
        });

        this.render();
    },

    render : function() {
        var $el = this.$el;
        _.each(this.camperViews, function(item) {
            $el.append(item.render());
        });
    }
});

var campers = new Campers([
    { name: "Bob Smith", room: 515 },
    { name: "Sue Jones", room: 475 }
]);

var camperViews = new CampersView({
    collection: campers,
    el: "#campers"
});