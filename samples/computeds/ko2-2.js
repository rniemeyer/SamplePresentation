var ko = ko2;

var viewModel = {
    items: ko.observableArray(["one"]),
    addItem: function() {
        this.items.push("new");
    },
    count: ko.observable(0)
};

viewModel.canAddItems = ko.computed(function() {
    return this.items().length < 5;
}, viewModel);

viewModel.canAddItems.subscribe(function() {
    this.count(this.count() + 1);
}, viewModel);

ko.applyBindings(viewModel);