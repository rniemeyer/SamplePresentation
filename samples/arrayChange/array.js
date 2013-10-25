var viewModel = {
    count: 0,
    items: ko.observableArray([{ name: "one" }]),

    addItem: function() {
        viewModel.items.push({ name: "new" + viewModel.count++ });
    },
    removeItem: function(item) {
        viewModel.items.remove(item);
    },
    swap: function() {
        var items = viewModel.items();
        viewModel.items([items[1], items[0]]);
    },

    changes: ko.observable()
};

viewModel.items.subscribe(viewModel.changes, null, "arrayChange");

ko.applyBindings(viewModel);