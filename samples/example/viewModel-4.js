var CamperView = Backbone.View.extend({
    initialize: function(options) {
        this.viewModel = {};

        _.each(this.model.attributes, function(value, item) {
            this.viewModel[item] = ko.observable(value);
            this.viewModel[item].subscribe(function(newValue) {
                this.model.set(item, newValue);
            }, this);
        }, this);

        this.listenTo(this.model, "change", function(model) {
            _.each(model.changed, function(value, prop) {
                this.viewModel[prop](value);
            }, this);
        }, this);

        ko.applyBindings(this.viewModel, this.el);
    }
});

var model = new Camper({ name: "Bob Smith", room: 515 });

var view = new CamperView({
    model: model,
    el: "#ko"
});