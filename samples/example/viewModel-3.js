var CamperView = Backbone.View.extend({
    initialize: function(options) {
        this.viewModel = {};

        _.each(this.model.attributes, function(value, item) {
            this.viewModel[item] = ko.observable(value);
        }, this);

        ko.computed(function() {
            this.model.set(ko.toJS(this.viewModel));
        }, this);

        ko.applyBindings(this.viewModel, this.el);
    }
});

var model = new Camper({ name: "Bob Smith", room: 515 });

var view = new CamperView({
    model: model,
    el: "#ko"
});