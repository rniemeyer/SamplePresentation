var CamperView = Backbone.View.extend({
    initialize: function(options) {
        this.createViewModel();
        ko.applyBindings(this.viewModel, this.el);
    },
    createViewModel: function() {
        this.viewModel = {};

        _.each(this.model.attributes, function(value, item) {
            this.viewModel[item] = ko.observable(value);
        }, this);

        ko.computed(function() {
            this.model.set(ko.toJS(this.viewModel));
        }, this);

        this.model.on("change", function(model) {
            _.each(model.changed, function(value, prop) {
                if (ko.isWriteableObservable(this.viewModel[prop])) {
                    this.viewModel[prop](model.changed[prop]);
                }
            }, this);
        }, this);
    }
});


var model = new Camper({ name: "Bob Smith", room: 515 });

var view = new CamperView({
    model: model,
    el: "#ko"
});